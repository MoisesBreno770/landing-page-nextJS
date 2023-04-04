export const ScrollTo = (id: any) => {
    const elemento = document.getElementById(id);
    elemento?.scrollIntoView();
}