function myfunction() {
  console.log("I am in function");
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  var name = document.getElementById("name").value;
  check(age, weight, name);
  function check(age, weight, name) {
    if (age == "") {
      dis = "please enter values";
      display(dis);
    } else if (age >= 5 && age <= 7) {
      if (weight >= 15 && weight <= 20) {
        dis = "hello " + name + " !!! your weight is perfect";
        display(dis);
      } else if (weight < 15) {
        dis = "hello  " + name +  "!!! your weight is less than recommended value of " +
        weight +
        "KG at an age of " +
        age;
        display(dis);
      } else if (weight > 20) {
        dis =
          "hello " +
          name +
          "!!! your weight is greater than recommended value of " +
          weight +
          "KG at an age of " +
          age;
        display(dis);
      }
    } else if (age >= 8 && age <= 10) {
      if (weight >= 21 && weight <= 25) {
        dis = "hello " + name + "!!! your weight is perfect";
        display(dis);
      } else if (weight < 21) {
        dis = "hello " + name +  "!!! your weight is less than recommended value of " +
        weight +
        "KG at an age of " +
        age;
        display(dis);
      } else if (weight > 25) {
        dis = "hello " + name +  "!!! your weight is greater than recommended value of " +
        weight +
        "KG at an age of " +
        age;
        display(dis);
      }
    } else if (age >= 11 && age <= 15) {
      if (weight >= 26 && weight <= 30) {
        dis = "hello " + name + " !!! your weight is perfect";
        display(dis);
      } else if (weight < 26) {
        dis = "hello " + name +  "!!! your weight is less than recommended value of " +
        weight +
        "KG at an age of " +
        age;
        display(dis);
      } else if (weight > 30) {
        dis = "hello " + name +  "!!! your weight is greater than recommended value of " +
        weight +
        "KG at an age of " +
        age;
        display(dis);
      }
    } else if (age >= 16 && age <= 20) {
      if (weight >= 31 && weight <= 40) {
        dis = "hello " + name + " !!! your weight is perfect";
        display(dis);
      } else if (weight < 31) {
        dis = "hello " + name +  "!!! your weight is less than recommended value of " +
        weight +
        "KG at an age of " +
        age;
        display(dis);
      } else if (weight > 40) {
        dis = "hello " + name +  "!!! your weight is greater than recommended value of " +
        weight +
        "KG at an age of " +
        age;
        display(dis);
      }
    }
  }

  function display(dis) {
    document.getElementById("result").innerHTML = dis;
  }
}
