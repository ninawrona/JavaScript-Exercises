

function urlSlug(title) {
    return title.toLowerCase().replaceAll(" ", "-");
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
// → a-mind-needs-books-like-a-sword-needs-a-whetstone