const loadComponent = async (componentName, container) => {
  try {
    const response = await fetch(`./components/${componentName}.html`)
    const html = await response.text()
    container.innerHTML = html

    // look for nested components
    const children = container.querySelectorAll("[data-component]")
    for (const child of children) {
      const childName = child.dataset.component
      await loadComponent(childName, child)
    }
  } catch (error) {
    console.error(`Error loading ${componentName}:`, error)
  }
}

// Updates the min-width of the table
const updateTableMinWidth = () => {

  // Get the table element
  const table = document.getElementById('table')
  const description = document.getElementById('description')

  if (!table) {
    throw new Error('Cannot find DOM element with id #table')
    return
  }
  if (!description) {
    throw new Error('Cannot find DOM element with id #description')
    return
  }

  // Calculate 50% of the screen width
  const halfScreenWidth = screen.width / 2

  // Calculate the vertical scroll bar width
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

  // Set the min-width of the table to half of the screen width minus the width of the scroll bar
  table.style.minWidth = `${halfScreenWidth - scrollBarWidth - 2}px`
  description.style.minWidth = `${halfScreenWidth - scrollBarWidth - 2}px`
}

// on DOM ready
document.addEventListener("DOMContentLoaded", async () => {
  const roots = document.querySelectorAll("[data-component]")
  for (const root of roots) {
    const componentName = root.getAttribute("data-component")
    await loadComponent(componentName, root)
  }

  // Event listener to update the min-width whenever the window is resized
  window.addEventListener('resize', updateTableMinWidth)

  // Initial call to set the min-width when the page loads
  updateTableMinWidth()

  document.querySelectorAll('.vslider, .number-box').forEach(el => {
    const rect = el.getBoundingClientRect();
    console.log('EL:', el.className || el, 'rect:', Math.round(rect.width), Math.round(rect.height));
    const span = el.querySelector('.vslider-number-box-label, .inner-number-box-label');
    if (span) {
      const fs = getComputedStyle(span).fontSize;
      console.log('  label font-size:', fs, 'computed:', getComputedStyle(span).fontFamily);
    }
    const svg = el.querySelector('svg');
    if (svg) {
      const srect = svg.getBoundingClientRect();
      console.log('  svg rect:', Math.round(srect.width), Math.round(srect.height));
    }
  });
})