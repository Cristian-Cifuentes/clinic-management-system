package com.clinic.patient.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Table(name = "patients")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre es obligatorio")
    private String name;

    @Email(message = "Correo electrónico no válido")
    @NotBlank(message = "El correo es obligatorio")
    private String email;

    @NotBlank(message = "El número de teléfono es obligatorio")
    private String phone;

    @Min(value = 0, message = "La edad no puede ser negativa")
    private int age;

    private String gender;

    private String address;
}
