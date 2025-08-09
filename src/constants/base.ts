export const Constants = new (class ConstantClass {
    readonly _now = new Date();
    private my_birth_data = new Date("2005-08-02");
    my_age = (() => {
        const birthDate = this.my_birth_data;
        const today = this._now;
        const years = today.getFullYear() - birthDate.getFullYear();
        const my_age =
            years -
            (today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
                today.getDate() < birthDate.getDate())
                ? 1
                : 0);
        return my_age;
    })();
})();
