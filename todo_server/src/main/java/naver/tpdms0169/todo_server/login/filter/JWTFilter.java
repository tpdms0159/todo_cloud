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

        //request에서 Authorization 헤더를 찾음
        String authorization= request.getHeader("Authorization");
        String requestUsername = request.getParameter("username");
//        System.out.println("request user:" + requestUsername);
//        System.out.println("request token:" + authorization);

        //Authorization 헤더 검증
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            System.out.println("Authorization header not present");
            filterChain.doFilter(request, response);
            return;

            //조건이 해당되면 메소드 종료 (필수)
        }

        String token = authorization.split(" ")[1];
//        System.out.println("request token:" + token);

        //토큰 소멸 시간 검증
        if (jwtUtil.isExpired(token)) {

            System.out.println("token expired");
            filterChain.doFilter(request, response);
            return;

            //조건이 해당되면 메소드 종료 (필수)
        }

        String username = jwtUtil.getUsername(token);
        String role = jwtUtil.getRole(token);

        // 해당 유저에 일치하는 토큰이 아닌 경우 처리
        if (!username.equals(requestUsername)) {
            response.setStatus(401);
            response.setHeader("If-None-Match", "user is not match");
            filterChain.doFilter(request, response);
            return;
        }

        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(username);
        userEntity.setPassword("temppassword");
        userEntity.setRole(role);

        CustomUserDetails customUserDetails = new CustomUserDetails(userEntity);
        Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authToken);
        try {
            filterChain.doFilter(request, response);
            System.out.println("token success");
            return;
        }catch (Exception e) {
            System.out.println(e);
            System.out.println("token failed");
            return;

        }
    }
}

