// Stylemarin v0.0.1 | MIT License | github.com/Submarinonline/Stylemarin
$("textarea").attr("rows", 1).on("input", e => $(e.target).height(0).innerHeight(e.target.scrollHeight));