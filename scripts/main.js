import { projects } from './projects.js'

const displayprojects = document.getElementById('projects')
var project
for (project of projects) {
  displayprojects.innerHTML += `
                                <div class="project">
                                <a href="${project.url}" target="_blank" class="link zoom">
                                    <img src="${project.img}" class="project-img"/>
                                </a>
                                    <div>
                                        <a href="${project.url}" target="_blank" class="link">
                                            <h2>${project.title}</h2>
                                        </a>
                                        <p>${project.description}</p>
                                    </div>
                                </div>
                                `
}
