export function getRandonId() {
    return Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
}