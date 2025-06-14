package com.clinic.auth.service;

import com.clinic.auth.model.User;
import com.clinic.auth.repository.UserRepository;  // <--- IMPORT CORRECTO
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User authenticate(String email, String password) {
    return userRepository.findByEmail(email)
            .filter(user -> passwordEncoder.matches(password, user.getPassword()))
            .orElse(null);
    }

}
