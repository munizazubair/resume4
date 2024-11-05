document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("generate-btn");
    generateButton.addEventListener("click", function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var resumeDiv = document.getElementById("resume-output");
        var obj = ((_a = document.getElementById("fill-obj")) === null || _a === void 0 ? void 0 : _a.value) || '';
        var name = ((_b = document.getElementById("fill-name")) === null || _b === void 0 ? void 0 : _b.value) || '';
        var nationality = ((_c = document.getElementById("fill-nat")) === null || _c === void 0 ? void 0 : _c.value) || '';
        var gmail = ((_d = document.getElementById("fill-gmail")) === null || _d === void 0 ? void 0 : _d.value) || '';
        var contact = ((_e = document.getElementById("fill-contact")) === null || _e === void 0 ? void 0 : _e.value) || '';
        var linkedin = ((_f = document.getElementById("fill-linkedin")) === null || _f === void 0 ? void 0 : _f.value) || '';
        var education = ((_g = document.getElementById("fill-education")) === null || _g === void 0 ? void 0 : _g.value) || '';
        var skills = ((_h = document.getElementById("fill-skills")) === null || _h === void 0 ? void 0 : _h.value) || '';
        if (!obj || !name || !nationality || !gmail || !contact || !linkedin || !education || !skills) {
            alert("To proceed with resume generation, kindly complete all necessary fields!");
            return;
        }
        resumeDiv.innerHTML = "\n        <h2>My Editable Resume</h2>\n        <p><span>Name:</span> ".concat(name, "</p>\n        <p><span>Nationality:</span> ").concat(nationality, "</p>\n        <p><span>Gmail:</span> ").concat(gmail, "</p>\n        <p><span>Contact No:</span> ").concat(contact, "</p>\n        <p><span>LinkedIn Profile:</span> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n        <p><span>Objective:</span> ").concat(obj, "</p>\n        <p><span>Education:</span>").concat(education, "</p>\n        <p><span>Skills:</span> ").concat(skills, "</p>\n      ");
    });
});
