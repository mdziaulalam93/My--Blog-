/* =====================================================
   DUSK & REVERIE — app.js
   - Mobile nav toggle
   - Hero bg parallax / load class
   - Scroll reveal (IntersectionObserver)
   - Newsletter form
   - Story Reader Modal (click any card to read full article)
   ===================================================== */

(function () {
  'use strict';

  /* ---- Story Articles Database ---- */
  const STORY_ARTICLES = {
    "The Beaches That Taught Me Stillness": {
      tag: "Travel",
      title: "The Beaches That Taught Me Stillness",
      date: "Oct 10, 2026",
      read: "6 min read",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop",
      body: `
        <p>Sometimes the ocean doesn't roar — it whispers. Three weeks alone along the southern coast of Portugal taught me something that months of guided meditation apps never could: <strong>how to simply listen.</strong></p>
        <p>I arrived with a suitcase, a laptop that I promised myself I wouldn't open after sunset, and an anxiety that hummed like a persistent refrigerator motor. For the first four days, the silence felt unnatural. My fingers twitched for a screen; my eyes searched for something to refresh.</p>
        <p>By day five, I stopped carrying my phone to the beach. I sat on the sand as the late-afternoon sun softened from blazing gold to amber honey. The tide moved in slow, rhythmic cycles. There was nothing to react to, nothing to optimise, and nowhere else I needed to be.</p>
        <p>We often think rest is something we have to earn after exhausting ourselves. But true stillness isn't an award; it is the ground from which all clarity returns. When I finally packed my bags to head home, the noise of the world was still waiting — but I was no longer carrying it inside me.</p>
      `
    },
    "On Slow Mornings & Unhurried Coffee": {
      tag: "Morning Rituals",
      title: "On Slow Mornings & Unhurried Coffee",
      date: "Sep 28, 2026",
      read: "4 min read",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=75&auto=format&fit=crop",
      body: `
        <p>Before the notifications. Before the inbox. Before the expectations of the world begin piling upon your shoulders, there is an hour that belongs strictly to you: <strong>the first hour of the day.</strong></p>
        <p>For years, my morning started with a blue-light glow illuminating my face while I was still half-asleep. I would read urgent emails about things that weren't actually urgent, and by 7:15 AM my nervous system was already in fight-or-flight mode.</p>
        <p>Everything shifted when I turned coffee making into a mindful pause. Grinding the beans by hand, waiting for the water to heat just shy of boiling, and pouring in slow concentric circles. It takes all of seven minutes, but those seven minutes set an anchor for the next twelve hours.</p>
        <p>If you want to protect your peace, start by defending your first thirty minutes. Don't let the world rush you out of your own morning.</p>
      `
    },
    "The Art of Doing Nothing Well": {
      tag: "Reflections",
      title: "The Art of Doing Nothing Well",
      date: "Sep 15, 2026",
      read: "5 min read",
      img: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=800&q=75&auto=format&fit=crop",
      body: `
        <p>We live in a culture that has pathologized rest. If you are not building, shipping, reading a non-fiction book, or exercising, you are made to feel that you are falling behind. <strong>Rest has been disguised as laziness.</strong></p>
        <p>The Italian concept of <em>il dolce far niente</em> — the sweetness of doing nothing — is not about neglect or apathy. It is the conscious appreciation of leisure. Sitting by a rain-streaked window watching drops race down the glass. Letting your mind wander down whatever alleyway it pleases without demanding a takeaway.</p>
        <p>Creativity and mental balance don't emerge from constant exertion; they happen in the idle spaces between. Like breathing, you cannot only inhale. The exhale is where life stabilizes.</p>
        <p>Give yourself permission today to waste twenty minutes deliberately. No guilt, no agenda. Just exist.</p>
      `
    },
    "Writing to Find Out What I Think": {
      tag: "Journaling",
      title: "Writing to Find Out What I Think",
      date: "Sep 2, 2026",
      read: "7 min read",
      img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=75&auto=format&fit=crop",
      body: `
        <p>Joan Didion once wrote: <em>"I write entirely to find out what I'm thinking, what I'm looking at, what I see and what it means."</em> I used to think people wrote in journals because they already had wisdom to record. The opposite is true.</p>
        <p>When you hold thoughts inside your head, they loop and tangle. They feel larger, darker, and more confusing than they really are. But the moment ink touches paper, nebulous feelings are forced into grammar and syntax. They become tangible.</p>
        <p>My daily journaling isn't poetry and it isn't destined for publication. Most days it reads like a messy inventory of minor worries and random observations. But by page two, something always untangles.</p>
        <p>If your mind feels crowded, buy an inexpensive notebook and write without stopping for five minutes. Don't edit. Just watch what comes out.</p>
      `
    },
    "Five Books That Quietly Rewired Me": {
      tag: "Books",
      title: "Five Books That Quietly Rewired Me",
      date: "Aug 20, 2026",
      read: "8 min read",
      img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=75&auto=format&fit=crop",
      body: `
        <p>A great book doesn't necessarily scream at you with dramatic plot twists. Sometimes the most transformative books arrive like an old friend pulling up a chair and whispering something you always knew deep down.</p>
        <p>Here are five books that quietly rearranged how I look at daily life:</p>
        <p><strong>1. The Remains of the Day by Kazuo Ishiguro</strong> — A heartbreaking masterclass in emotional honesty and the quiet tragedy of postponing personal happiness in the name of duty.</p>
        <p><strong>2. Letters from a Stoic by Seneca</strong> — Practical, punchy, and surprisingly modern reflections on time, friendship, and mortality.</p>
        <p><strong>3. Siddhartha by Hermann Hesse</strong> — A lyrical journey reminding us that wisdom cannot simply be taught; it must be lived and experienced.</p>
        <p><strong>4. Silence: In the Age of Noise by Erling Kagge</strong> — Written by an explorer who walked to the South Pole alone, this book explores why silence is our greatest luxury.</p>
        <p><strong>5. The Book of Disquiet by Fernando Pessoa</strong> — Fragmented, melancholic, and deeply observant notes on the beauty of ordinary moments.</p>
      `
    },
    "Learning to Enjoy My Own Company": {
      tag: "Solitude",
      title: "Learning to Enjoy My Own Company",
      date: "Jun 12, 2026",
      read: "5 min read",
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=75&auto=format&fit=crop",
      body: `
        <p>There was a time when the prospect of spending an entire weekend alone filled me with subtle dread. I felt the urge to fill every quiet gap: podcasts on 1.5x speed while cooking, music in the shower, television running in the background just for company.</p>
        <p>Loneliness is the painful feeling of lacking connection with others; <strong>solitude is the peaceful joy of connection with yourself.</strong></p>
        <p>Learning solitude requires intentional practice. It starts with taking a walk through a quiet park without headphones. It continues with sitting in a corner café with just a sketchbook. At first, your mind fidgets like an unruly child. But eventually, the fidgeting subsides, and you discover that you are actually pretty good company.</p>
      `
    },
    "Making Things Nobody Asked For": {
      tag: "Creativity",
      title: "Making Things Nobody Asked For",
      date: "May 18, 2026",
      read: "6 min read",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=75&auto=format&fit=crop",
      body: `
        <p>Everything in the digital economy is built around KPIs, likes, retweets, and audience engagement. We've been trained to ask: <em>"Who is this for?"</em> and <em>"How does this scale?"</em> before we even sketch the first outline.</p>
        <p>Last month, I spent an entire rainy Sunday building a tiny web page that does nothing but play the sound of rain and display nostalgic memories. No analytics, no monetization, no social sharing buttons. Just pure fun.</p>
        <p>Reclaiming the joy of making things without an audience is the ultimate antidote to creative burnout. When there is no one to judge your work, you are free to explore, stumble, and create with genuine joy.</p>
      `
    },
    "The Ordinary Things I Keep Forgetting to Notice": {
      tag: "Gratitude",
      title: "The Ordinary Things I Keep Forgetting to Notice",
      date: "May 1, 2026",
      read: "3 min read",
      img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=75&auto=format&fit=crop",
      body: `
        <p>The smell of clean laundry dried in the sun. The first crisp autumn breeze that requires a jacket. The sound of rain beating against glass when you have nowhere to go. <strong>None of these things are expensive, yet they are the richest textures of our lives.</strong></p>
        <p>We spend so much time striving for milestones — the promotion, the new apartment, the vacation next summer — that we speed-walk through the present moment as if it were merely a waiting room.</p>
        <p>Tonight, take sixty seconds before sleep to name three small, unremarkable things that went right today. That simple recognition changes everything.</p>
      `
    },
    "Getting Lost Was the Whole Point": {
      tag: "Travel",
      title: "Getting Lost Was the Whole Point",
      date: "Aug 14, 2026",
      read: "6 min read",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=75&auto=format&fit=crop",
      body: `
        <p>I had a spreadsheet. I had every hour mapped with GPS coordinates and reservations. And then, thirty minutes after arriving in a mountain village, my phone battery died and the rain began.</p>
        <p>I took shelter under the awning of a small bakery whose doorway smelled of freshly baked cinnamon and cardamom. The baker handed me hot tea while we traded hand gestures and broken sentences. It turned into the highlight of the entire journey.</p>
        <p>Travel without room for error is just logistics in a different timezone. The best memories are almost always the unscripted detours.</p>
      `
    },
    "On Changing Your Mind Without Apology": {
      tag: "Growth",
      title: "On Changing Your Mind Without Apology",
      date: "Jul 22, 2026",
      read: "4 min read",
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=75&auto=format&fit=crop",
      body: `
        <p>In modern discourse, changing your mind is often viewed as hypocrisy or weakness. We praise rigid consistency as a badge of honor, even in the face of new facts and life experiences.</p>
        <p>To learn and mature means outgrowing previous versions of yourself. The beliefs, habits, and career goals that served you at 20 might not fit who you are today — and that is not failure, that is progress.</p>
        <p>Hold your values strongly, but hold your opinions loosely. Updating your worldview is simply living with your eyes open.</p>
      `
    },
    "Three Lines a Day Is Enough": {
      tag: "Mindfulness",
      title: "Three Lines a Day Is Enough",
      date: "Jul 8, 2026",
      read: "4 min read",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=75&auto=format&fit=crop",
      body: `
        <p>I spent years abandoning journaling habits because I set the bar impossibly high. I felt like every entry needed to be a profound essay examining the human condition.</p>
        <p>Then I adopted the three-line rule: <strong>one thing that happened, one thought I had, and one thing I am thankful for.</strong> That takes 90 seconds.</p>
        <p>Consistency beats intensity every single time. Six months later, those short notes have become a treasured tapestry of a year well-lived.</p>
      `
    }
  };

  /* ---- Mobile nav ---- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        toggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  /* ---- Hero bg scale-in after load ---- */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('load', () => {
      requestAnimationFrame(() => heroBg.classList.add('loaded'));
    });
  }

  /* ---- Scroll reveal ---- */
  const revealTargets = [
    '.section-header',
    '.post-hero',
    '.posts-grid .card',
    '.about-img-wrap',
    '.about-text',
    '.newsletter-inner',
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      if (el.closest('.posts-grid')) {
        el.style.transitionDelay = `${i * 0.08}s`;
      }
      observer.observe(el);
    });
  });

  /* ---- Sticky header shadow on scroll ---- */
  const header = document.querySelector('.site-header');
  if (header) {
    const scrollHandler = () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 4px 32px rgba(0,0,0,0.5)'
        : '';
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });
  }

  /* ---- Newsletter form ---- */
  const form = document.querySelector('.nl-form');
  const msgEl = document.getElementById('nl-msg');

  if (form && msgEl) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value.trim();

      if (!email) {
        msgEl.textContent = 'Please enter a valid email address.';
        msgEl.style.color = '#e07070';
        return;
      }

      const btn = form.querySelector('button');
      btn.textContent = 'Subscribing…';
      btn.disabled = true;

      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));

      form.reset();
      btn.textContent = 'Subscribe';
      btn.disabled = false;
      msgEl.textContent = '✓ You\'re in! Welcome to Dusk & Reverie.';
      msgEl.style.color = 'var(--clr-accent)';

      setTimeout(() => { msgEl.textContent = ''; }, 6000);
    });
  }

  /* ---- Story Reader Modal ---- */
  const modal = document.getElementById('storyModal');
  const modalClose = document.getElementById('modalClose');
  const modalCloseBottom = document.getElementById('modalCloseBottom');
  const modalBackdrop = document.getElementById('modalBackdrop');
  let lastActiveElement = null;

  function openStoryModal(title) {
    const story = STORY_ARTICLES[title.trim()];
    if (!story || !modal) return;

    lastActiveElement = document.activeElement;

    document.getElementById('modal-tag').textContent = story.tag;
    document.getElementById('modal-title').textContent = story.title;
    document.getElementById('modal-date').textContent = story.date;
    document.getElementById('modal-read').textContent = story.read;

    const img = document.getElementById('modal-img');
    img.src = story.img;
    img.alt = story.title;

    document.getElementById('modal-body').innerHTML = story.body;

    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    // Scroll modal top
    const card = modal.querySelector('.modal-card');
    if (card) card.scrollTop = 0;

    if (modalClose) modalClose.focus();
  }

  function closeStoryModal() {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  if (modal) {
    if (modalClose) modalClose.addEventListener('click', closeStoryModal);
    if (modalCloseBottom) modalCloseBottom.addEventListener('click', closeStoryModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeStoryModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
        closeStoryModal();
      }
    });

    // Modal focus trap
    modal.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = [...modal.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')]
        .filter(el => !el.hasAttribute('hidden'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  // Bind click event on every story card
  document.querySelectorAll('.post-hero, .posts-grid .card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Avoid interference if an external link is clicked
      const heading = card.querySelector('h3');
      if (heading) {
        e.preventDefault();
        openStoryModal(heading.textContent);
      }
    });
  });

})();
