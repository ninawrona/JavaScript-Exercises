export function capitalize(string){
    return [...string].map(s => s.toUpperCase()).join("");
}