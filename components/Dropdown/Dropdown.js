class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    // console.log(dropdown);
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = document.querySelector('.dropdown-button');
    // console.log(this.button);
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = document.querySelector('.dropdown-content');
    // console.log(this.content);
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
      // Toggle the ".dropdown-hidden" class off and on
      this.button.classList.toggle('dropdown-hidden');
      this.content.classList.toggle('dropdown-content');

  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));