export function groupPostsByYear(posts) {
  return posts?.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
}

export function trimDescription(description, maxLength) {
  if (description.length <= maxLength) {
    return description;
  }
  
  let trimmedDescription = description.substring(0, maxLength - 3);
  const lastSpaceIndex = trimmedDescription.lastIndexOf(' ');
  
  if (lastSpaceIndex > 0) {
    trimmedDescription = trimmedDescription.substring(0, lastSpaceIndex);
  }
  
  return trimmedDescription + '...';
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function hyphenToSpace(string) {
  return string.replace(/-/g, ' ');
}

export function stripHtmlTags(html) {
  return html.replace(/<[^>]*>?/gm, '');
}

export function stripHtmlTags2(html) {
  let div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}



/**
 * 
 * @param {Date|string|number} inputDate - The date to format. Can be a Date object, a date string, or a timestamp.
 * @param {boolean} [showYear=false] - Optional. If true, the formatted date will include the year.
 * @returns {string} The formatted date string.
 *
 * @example
 * // Returns '4 Jul'
 * formatDate('2024-07-04');
 * 
 * @example
 * // Returns '4 Jul 2024'
 * formatDate('2024-07-04', true);
 */

export function formatDate(inputDate, showYear = false) {

  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  if (showYear) {
    return `${day} ${month} ${year}`;
  } else {
    return `${day} ${month} `;
  }
}


export function slugify(string) {
  return (
    string &&
    `${string}`
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')
  )
}

