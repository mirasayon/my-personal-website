export const my_birth_data = new Date("2005-08-02");
export const my_age = (() => {
    const birthDate = my_birth_data;
    const now = new Date();
    const years = now.getFullYear() - birthDate.getFullYear();
    const my_age =
        years -
        (now.getMonth() < birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() &&
            now.getDate() < birthDate.getDate())
            ? 1
            : 0);
    return my_age;
})();

export const base_url = "mirasayon.com" as const;
export const full_url = "https://mirasayon.com" as const;
