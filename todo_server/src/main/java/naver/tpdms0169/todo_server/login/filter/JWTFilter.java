package naver.tpdms0169.todo_server.login.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import naver.tpdms0169.todo_server.login.DTO.CustomUserDetails;
import naver.tpdms0169.todo_server.login.Entity.UserEntity;
import naver.tpdms0169.todo_server.login.jwt.JWTUtil;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class JWTFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;

    public JWTFilter(JWTUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // request 에서 Authorization 헤더 찾음
        String authoriazation = request.getParameter("Authorization");

        // Authorization 헤더 검증
        if (authoriazation == null || !authoriazation.startsWith("Bearer ")) {
            System.out.println("Authorization required");
            filterChain.doFilter(request, response);
            return;
        }

        // Bear 부분 제거 후 순수 토큰만 확인
        String token = authoriazation.split("Bearer ")[1];

        // token 소멸 시간 검증
        if (jwtUtil.isExpired(token)) {
            filterChain.doFilter(request, response);

            return;
        }


        // 토큰에서 username 과 role 분리
        String username = jwtUtil.getUsername(token);
        String role = jwtUtil.getRole(token);

        // UserEntity 를 생성하여 값 set
        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(username);
        userEntity.setRole(role);
        userEntity.setPassword("tempPassword");

        // UserDetails 에 회원 정보 객체 담기
        CustomUserDetails customUserDetails = new CustomUserDetails(userEntity);

        // spring security 인증 토큰 생성
        Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());
        // 세션에 사용자 등록
        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);
    }
}
