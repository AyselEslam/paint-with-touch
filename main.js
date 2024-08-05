canvas = document.getElementById("mycanvas")
var mouseevent = "";
var color = "";
var width = "";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown()
{
    mouseevent = "mousedown"
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup()
{
    mouseevent = my_mouseup
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave()
{
    mouseevent = my_mouseleave
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove()
{

    current_position_of_mouse_x = clientX - canvas.offsetLeft;
    current_position_of_mouse_y = clientY - canvas.offsetTop;

    if (MouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove()
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetleft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo (last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo (current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart()
{
}

// Add an event listener command for touchstart.
// Create a function called my_touchstart.
