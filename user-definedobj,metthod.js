<script>
function Car(model, year) {
this.model = model;
this.year = year;
this.getDetails = function () {
return `Car Model: ${this.model}, Year: ${this.year}`;
};
}
let myCar = new Car("Tesla", 2022);
console.log(myCar.getDetails());
</script>
