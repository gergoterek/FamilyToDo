package com.alkfejl.TodoProject.security;

import com.alkfejl.TodoProject.model.User;
import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.RequestScope;

import javax.transaction.Transactional;

@RequestScope
@Data
@Component
@Transactional
public class AuthenticatedUser {
    private User user;
}