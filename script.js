//your JS code here. If required.
// Utility functions for cookies
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let c of cookies) {
    c = c.trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length);
    }
  }
  return null;
}

// Apply preferences from cookies
function applyPreferences() {
  const fontsize = getCookie("fontsize") || "16";
  const fontcolor = getCookie("fontcolor") || "#000000";

  document.documentElement.style.setProperty("--fontsize", fontsize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontcolor);

  // Update form fields with saved values
  document.getElementById("fontsize").value = fontsize;
  document.getElementById("fontcolor").value = fontcolor;
}

// Handle form submit
document.getElementById("preferencesForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fontsize = document.getElementById("fontsize").value;
  const fontcolor = document.getElementById("fontcolor").value;

  // Save cookies for 30 days
  setCookie("fontsize", fontsize, 30);
  setCookie("fontcolor", fontcolor, 30);

 
  applyPreferences();
});

// Apply on first load
applyPreferences();
