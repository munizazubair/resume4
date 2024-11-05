document.addEventListener("DOMContentLoaded", () => {
      const generateButton = document.getElementById("generate-btn") as HTMLButtonElement;
 
    generateButton.addEventListener("click", () => {
      const resumeDiv = document.getElementById("resume-output") as HTMLDivElement;
  
      const obj = (document.getElementById("fill-obj") as HTMLInputElement)?.value || '';
      const name = (document.getElementById("fill-name") as HTMLInputElement)?.value || '';
      const nationality = (document.getElementById("fill-nat") as HTMLInputElement)?.value || '';
      const gmail = (document.getElementById("fill-gmail") as HTMLInputElement)?.value || '';
      const contact = (document.getElementById("fill-contact") as HTMLInputElement)?.value || '';
      const linkedin = (document.getElementById("fill-linkedin") as HTMLInputElement)?.value || '';
      const education = (document.getElementById("fill-education") as HTMLInputElement)?.value || '';
      const skills = (document.getElementById("fill-skills") as HTMLInputElement)?.value || '';
  
  
      if (!obj || !name || !nationality || !gmail || !contact || !linkedin || !education || !skills ) {
          alert(`To proceed with resume generation, kindly complete all necessary fields!`);
          return; 
        }
        
  
      resumeDiv.innerHTML = `
        <h2>My Editable Resume</h2>
        <p><span>Name:</span> ${name}</p>
        <p><span>Nationality:</span> ${nationality}</p>
        <p><span>Gmail:</span> ${gmail}</p>
        <p><span>Contact No:</span> ${contact}</p>
        <p><span>LinkedIn Profile:</span> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <p><span>Objective:</span> ${obj}</p>
        <p><span>Education:</span>${education}</p>
        <p><span>Skills:</span> ${skills}</p>
      `;
  });
});

  