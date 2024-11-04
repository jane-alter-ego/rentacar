// Function to switch between desktop, tablet, and mobile modes
function switchMode(mode) {
    // Remove any existing mode classes from the body
    document.body.classList.remove('desktop-mode', 'tablet-mode', 'mobile-mode');

    // Apply the corresponding view class based on the selected mode
    switch (mode) {
        case 'desktop':
            document.body.classList.add('desktop-mode');
            closeMenu(); // Ensure dropdown menu is closed when switching to desktop mode
            break;
        case 'tablet':
            document.body.classList.add('tablet-mode');
            closeMenu(); // Ensure menu is initially closed in tablet mode
            break;
        case 'mobile':
            document.body.classList.add('mobile-mode');
            closeMenu(); // Ensure menu is initially closed in mobile mode
            break;
    }
}

// Function to toggle the visibility of the dropdown menu in mobile/tablet mode
function toggleMobileMenu(event) {
    event.stopPropagation(); // Prevent the click from triggering handleClickOutside
    const menuLinks = document.querySelector('.menu-links');
    const menuIcon = document.getElementById('menu-icon');

    // Toggle the 'show' class on the menu-links element to display/hide the dropdown menu
    menuLinks.classList.toggle('show');
    menuIcon.classList.toggle('active'); // Toggle the active state of the burger icon

    // Add or remove the click event listener based on the menu's state
    if (menuLinks.classList.contains('show')) {
        document.addEventListener('click', handleClickOutside);
    } else {
        document.removeEventListener('click', handleClickOutside);
    }
}

// Function to close the dropdown menu and reset the burger icon state
function closeMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const menuIcon = document.getElementById('menu-icon');

    // Remove 'show' class from the menu-links to hide the dropdown menu
    menuLinks.classList.remove('show');
    menuIcon.classList.remove('active'); // Reset the burger icon to its inactive state

    // Remove the event listener for outside clicks when the menu is closed
    document.removeEventListener('click', handleClickOutside);
}

// Function to close the dropdown menu if clicking outside of it
function handleClickOutside(event) {
    const menuLinks = document.querySelector('.menu-links');
    const menuIcon = document.getElementById('menu-icon');

    // Close the menu if the click is outside of the menu or burger icon
    if (!menuLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        closeMenu();
    }
}

// Event listeners for the device icons to switch modes
document.querySelector('.fa-desktop').addEventListener('click', () => switchMode('desktop'));
document.querySelector('.fa-tablet-alt').addEventListener('click', () => switchMode('tablet'));
document.querySelector('.fa-mobile-alt').addEventListener('click', () => switchMode('mobile'));

// Event listener for the burger menu icon to toggle the dropdown menu
document.getElementById('menu-icon').addEventListener('click', toggleMobileMenu);
