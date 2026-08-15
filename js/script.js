// education & certificate
const educationTabs = document.querySelectorAll(".education-tabs .tab");

const educationContent = document.getElementById("education-content");
const certificateContent = document.getElementById("certificate-content");


educationTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        // Remove active state from both tabs
        educationTabs.forEach((item) => {
            item.classList.remove("active");
        });


        // Add active state to the clicked tab
        tab.classList.add("active");


        // Hide both contents first
        educationContent.style.display = "none";
        certificateContent.style.display = "none";


        // Find which content should be shown
        const targetId = tab.dataset.target;
        const targetContent = document.getElementById(targetId);


        // Show selected content
        targetContent.style.display = "block";

    });

});

/* ---------- Skills Tabs ---------- */

const skillTabs = document.querySelectorAll(".skills-tabs .tab");

const skillContents = document.querySelectorAll(".skills-content");


skillTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        /* Remove active from all Skills tabs */

        skillTabs.forEach((item) => {
            item.classList.remove("active");
        });


        /* Add active to clicked tab */

        tab.classList.add("active");


        /* Hide all Skills contents */

        skillContents.forEach((content) => {
            content.style.display = "none";
        });


        /* Find selected content */

        const targetId = tab.dataset.target;

        const targetContent = document.getElementById(targetId);


        /* Show selected content */

        targetContent.style.display = "block";

    });

});

/* ---------- Gallery Lightbox ---------- */

const galleryTriggers = document.querySelectorAll(".gallery-trigger");

const galleryLightbox = document.getElementById("gallery-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");


if (galleryLightbox && lightboxImage && lightboxClose) {

    /* Open Lightbox */

    galleryTriggers.forEach((trigger) => {

        trigger.addEventListener("click", () => {

            const imageSrc = trigger.dataset.image;

            lightboxImage.src = imageSrc;

            galleryLightbox.classList.add("is-open");

            galleryLightbox.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

        });

    });


    /* Close Lightbox */

    function closeLightbox() {

        galleryLightbox.classList.remove("is-open");

        galleryLightbox.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }


    /* Click delete icon */

    lightboxClose.addEventListener("click", closeLightbox);


    /* Click dark background */

    galleryLightbox.addEventListener("click", (event) => {

        if (event.target === galleryLightbox) {
            closeLightbox();
        }

    });


    /* Press Escape key */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            galleryLightbox.classList.contains("is-open")
        ) {
            closeLightbox();
        }

    });

}