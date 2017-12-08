### INGENIERIA DE SISSOTEC :computer:

#### Tareas

- [ ] Martes 5      - Diagramas de colaboración + Diagrama de clases
- [ ] Miercoles 6   - Base de datos (E-R, Lógico y Físico)
- [ ] Jueves 7      - Interfaces de Usuario en Adobe XD
- [ ] Viernes 8     - Interfaces en HTML + CSS
- [ ] Sabado 9      - Interfaces en HTML + CSS
- [ ] Domingo 10    - Programación de Módulos
- [ ] Lunes 11      - Programación de Módulos
- [ ] Martes 12     - Programación de Módulos
- [ ] Miercoles 13  - Documentación
- [ ] Jueves 14     - Documentación

### Especifiación de Historias de Usuario

##### **HU01 Autenticación de usuario**
1. El usuario inicia sesión con su gmail
2. El  sistema busca al usuario
   - Si el usuario existe, busca en (`cliente`, `especialista`, `mesa de ayuda` o `administrador`) de acuerdo a su campo **idNivelUsuario** y si su **estado** esta en 1=alta.
   - Si el usuario no existe, se registra en `usuario` con el **idNivelUsuario=0** y en `cliente`.
##### HU02 Generación de atención
##### HU03 Atención en mesa de ayuda
##### HU04 Atención de especialista
##### HU05 Conformidad de atención
##### HU06 Gestión de usuarios
1. Consulta de usuario
2. Modificar usuario
3. Cambiar nivel de usuario
##### HU07 Gestión de especialistas
1. Registro de especialistas
   - El usuario ingresa los campos del formulario.
   - El administrador busca al `usuario` por **correo** en el ultimo campo.
   - El administrador selecciona el usuario para asignar y:
      - Si su **idNivelUsuario** es -1 entonces se aplica.
      - Si no es -1, entonces se muestra un mensaje de error.
      
      - Si no, se busca al `usuario` en `cliente`,`especialista`,`mesaAyuda` o `administrador` de acuerdo a su **idNivelUsuario**:
         - Si existe se advierte y se deniega la operación de registro.
         - Si no existe se realizan los siguientes pasos:
            - De acuerdo al **idNivelUsuario** del `usuario` se busca en (`cliente`) y se da de baja.
            - Se cambia el **idNivelUsuario** a **1**.
            - Se registran los datos en `especialista` con el **pk** del `usuario`.
         
2. Modificación de especialistas
   - El usuario activa la edición de un especialista.
   - El sistema muestra el formulario de edición para un especialista
      - Los campos editables son: **nomEspecialista**, **apePatEspecialista**, **apeMatEspecialista**,
       **dniEspecialista**, **celEspecialista**, **dirEsepecialista**, **fechNacEspecialista**, **_estado_**(dar de baja).
   - En caso de modificar el `usuario` asignado:
      - El sistema busca el nuevo `usuario` seleccionado en (`cliente`, `mesaAyuda` o `administrador`) con el **estado** acivo=1.
         - Si no encuentra ninguno procede la modificación.
         - Si encuentra el sistema advierte y deniega la modificación.
##### _HU08 Gestión de mesa de ayuda_
##### _HU09 Gestión de administradores_
##### HU10 Gestión de tickets

[Basic syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/)

[Emojis](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
