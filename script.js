// Import config
import config from './config.json' assert { type: 'json' };

// Modal HTML content
const modalHTML = `
    <div class="modal fade" id="valentineModal" tabindex="-1" aria-labelledby="valentineModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h5 class="modal-title fs-4 w-100 text-start" id="valentineModalLabel">Dear ${config.recipientName} ❤️</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-2">
                    <img 
                        src="${config.images.avatar.src}" 
                        alt="${config.images.avatar.alt}" 
                        class="img-fluid rounded-circle mb-4 avatar-img border border-3"
                    >
                    <p class="mb-0">${config.fullMessage}</p>
                </div>
                <div class="modal-footer border-top-0 justify-content-center gap-3">
                    <a href="https://wa.me/${config.whatsappNumber}?text=Iyaaa%20aku%20mauuu!!!!!%20XOXO%20[${config.websiteUrl}]" type="button" class="btn btn-success px-4">Yes</a>
                    <button type="button" class="btn btn-danger px-4" id="noButton" data-bs-dismiss="modal">No</button>
                </div>
            </div>
        </div>
    </div>
`;

// Insert modal into the container
document.getElementById('modalContainer').innerHTML = modalHTML;

// Wrap all code in DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Update year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear() + 1;
    }

    // Add click event listener to card
    const card = document.querySelector('.card');
    if (card) {
        // Set initial modal target based on date
        const today = new Date();
        const targetDate = new Date(today.getFullYear(), 1, 14); // 14 Februari current year (bulan dimulai dari 0)
        
        // Check if today is after or equal to target date
        const isUnlocked = today >= targetDate;
        const targetModalId = isUnlocked ? '#valentineModal' : '#waitModal';
        card.setAttribute('data-bs-target', targetModalId);

        // Update days remaining if not unlocked
        if (!isUnlocked) {
            const daysRemaining = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
            const daysRemainingElement = document.getElementById('daysRemaining');
            if (daysRemainingElement) {
                daysRemainingElement.textContent = `Days remaining: ${daysRemaining} days`;
            }
        }
    }

    // Add random movement to No button
    const noButton = document.getElementById('noButton');
    if (noButton) {
        noButton.addEventListener('mouseover', function() {
            // Get viewport dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            // Button dimensions
            const buttonWidth = this.offsetWidth;
            const buttonHeight = this.offsetHeight;
            
            // Calculate maximum positions
            const maxX = viewportWidth - buttonWidth;
            const maxY = viewportHeight - buttonHeight;
            
            // Generate random positions within viewport
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
            
            // Apply new position
            this.style.position = 'fixed';
            this.style.left = randomX + 'px';
            this.style.top = randomY + 'px';
            this.style.zIndex = '9999';
        });
    }

    // Check if audio element exists immediately
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (!backgroundMusic) {
        console.error('Background music element not found on page load');
    } else {
        console.log('Background music element found successfully');
    }
});

// Reset position when modal is closed
const valentineModal = document.getElementById('valentineModal');
const backgroundMusic = document.getElementById('backgroundMusic');

if (valentineModal) {
    valentineModal.addEventListener('shown.bs.modal', function() {
        const backgroundMusic = document.getElementById('backgroundMusic');
        if (backgroundMusic) {
            console.log('Trying to play music...');
            backgroundMusic.volume = 0.5;
            backgroundMusic.play().then(() => {
                console.log('Music started playing');
            }).catch((error) => {
                console.error('Error playing music:', error);
            });
        } else {
            console.error('Background music element not found when modal shown');
        }
    });

    valentineModal.addEventListener('hidden.bs.modal', function() {
        // Stop music when modal is closed
        if (backgroundMusic) {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }

        // Reset no button position (existing code)
        const noButton = document.getElementById('noButton');
        if (noButton) {
            noButton.style.position = 'static';
            noButton.style.left = 'auto';
            noButton.style.top = 'auto';
        }
    });
}

const envelopeHTML = `
    <h1 class="message">
        ${config.envelopeMessages.greeting}<br>
        ${config.envelopeMessages.birthday}<br>
        ${config.envelopeMessages.wish}<br>
        <small class="text-muted">${config.envelopeMessages.instruction}</small>
        <span class="hashtag">${config.envelopeMessages.hashtag}<span id="year"></span></span>
    </h1>
`;

// Update the content
document.querySelector('.message').innerHTML = envelopeHTML;
