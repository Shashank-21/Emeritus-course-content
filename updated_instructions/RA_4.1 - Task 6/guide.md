### Task 6. Friday Evening Specials

Your restaurant now offers a special dinner combination on Friday evenings. Recommend it to your customers by using logical operators.

# Brief Recap of Logical Operators

1. **AND (`&&`)**: Returns `true` if both operands or conditions are true. Used for checking multiple conditions simultaneously.

   ```javascript
   let dayOfWeek = 5;
   let isHoliday = true;
   if (dayOfWeek === 6 && isHoliday) {
     console.log("Time for a vacation!");
   } else {
     console.log("Regular weekend.");
   }
   ```

   The above piece of code will print `Regular Weekend` because the condition `dayOfWeek === 6` evaluates to `false`.

2. **OR (`||`)**: Returns `true` if at least one of the operands is true. Useful for scenarios where any one of multiple conditions being true is sufficient.

   ```javascript
   let isRaining = false;
   let tool = "umbrella";
   if (isRaining || tool === "umbrella") {
     console.log("You won't get wet!");
   } else {
     console.log("There's a risk of getting wet.");
   }
   ```

   The above piece of code will print `You won't get wet!` because the condition `tool === "umbrella"` evaluates to true.

3. **NOT (`!`)**: Inverts the truthiness of the operand. If the operand is true, it returns false, and vice versa. This is often used for negating a condition.
   ```javascript
   let isSunny = true;
   if (!isSunny) {
     console.log("It's not a sunny day.");
   } else {
     console.log("It's a sunny day!");
   }
   ```

{Check It!|assessment}(test-3138118762)

|||guidance

```js
function handleFridaySpecial(currentHour, currentDay) {
  let specialDinnerCombo;
  if (currentHour >= 18 && currentDay === 5) {
    specialDinnerCombo = "Steak and Fries";
  } else {
    specialDinnerCombo = "None";
  }
  return specialDinnerCombo;
}
```

|||
