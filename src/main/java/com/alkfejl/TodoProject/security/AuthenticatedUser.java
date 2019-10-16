package com.alkfejl.TodoProject.security;

import com.alkfejl.TodoProject.model.User;
import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.annotation.RequestScope;

@RequestScope
@Component
@Data
@Transactional
public class AuthenticatedUser {
    private User user;
}