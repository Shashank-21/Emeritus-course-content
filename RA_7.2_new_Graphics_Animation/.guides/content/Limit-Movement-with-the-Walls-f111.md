Now that you have made it realistic, you should have accounted for the walls! Prevent the balls from flying off the screen.

**Limiting movement within the walls**
Limit movement within the walls by checking whether the ball is going beyond any wall and update two things:
- *The coordinate of the ball.* If either the x coordinate or the y coordinate lands beyond the wall, the corresponding coordinate is updated to the boundary of the wall.
- *The velocity of the ball.* You have hit a wall. Update the velocity to change the direction by reversing the sign of the corresponding velocity.

{Check It!|assessment}(test-3089137766)