<script>
const skillLevels = document.querySelectorAll('.skill-level');

function animateSkills() {
    skillLevels.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(skillTop < windowHeight - 50) {
            skill.style.width = skill.dataset.level;
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
</script>
