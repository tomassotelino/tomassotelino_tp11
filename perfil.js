let perfil = "";

switch (perfil) {
    case 'administrador':
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case 'asistente':
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos")
        break;
    case 'invitado':
        console.log("Usted sólo tiene permisos de consultar datos")
        break;
    default:
        console.log("Debe especificar el perfil del usuario")
        break;
}
