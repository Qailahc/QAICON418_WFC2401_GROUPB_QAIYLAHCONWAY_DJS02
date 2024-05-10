// Selecting Elements
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const dividend = entries.get("dividend");   // dividend button
    const divider = entries.get("divider");     // divider button
    result.classList.remove('error-message');

    // Checks to see if either inputs are empty, if is will error handle - will not crash
    if (dividend === "" || divider === "") {
        result.classList.add('error-message');
        result.innerText = "Division not performed. Both values are required in inputs. Try again.";
        console.error("Division not performed. Both values are required in inputs. Try again.")
        return;
    }

    // If divided by the number 0, error message will appear - will not crash
    if (divider === "0"){
      result.classList.add('error-message');
      result.innerText = "Division not performed. Invalid number provided. Try again." ;
      console.error("Division not performed. Invalid number provided. Try again.")
      return;
  }
    
  // If dividend and divider is empty, error will appear, red screen will pop up - will crash
    if (isNaN(dividend) || isNaN(divider)) {
        result.classList.add("critical-error");
        result.innerText = "Something critical went wrong. Please reload the page.";
        console.error("Something critical went wrong. Please reload the page.");
        return;
    }
      
      // Performing Division - If all error checks pass, code calculates the division result
       result.innerText = Math.floor(dividend / divider);
    
});