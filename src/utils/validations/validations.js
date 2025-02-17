export const validateWorkspace = (workspace) => {
    if (!workspace) {
        return 'El nombre del workspace es requerido.';
    } else if (workspace.length < 8) {
        return 'El nombre del workspace debe tener al menos 8 caracteres.'
    }
    return ''
}