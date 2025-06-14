package com.clinic.auth.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String email;
    private String password;
    private String role; // Por si deseas manejar roles
}
