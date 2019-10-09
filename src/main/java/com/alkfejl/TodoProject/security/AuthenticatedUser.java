package com.alkfejl.TodoProject.security;

import com.alkfejl.TodoProject.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.RequestScope;

@RequestScope
@Component
@Data
public class AuthenticatedUser {
    private User user;
}

