import { useState, useRef, useEffect } from "react";
import "./podcast.css";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const articles = [
  { id: 1, title: "L'IA générative redéfinit les stratégies marketing en 2026", summary: "Comment les entreprises utilisent l'IA pour créer des campagnes hyper-personnalisées à grande échelle.", category: "IA & Tech", date: "19 mai 2026", author: "Sophie Martin", readTime: "6 min", views: "12.4k", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop", trending: true, featured: true, content: "Dans un paysage numérique en constante évolution, l'intelligence artificielle générative s'impose comme un tournant décisif. Les entreprises qui intègrent ces technologies constatent des résultats spectaculaires : campagnes hyper-personnalisées, ROI multiplié par 3, réduction significative des coûts de production. Notre analyse montre que l'IA permet désormais de créer des messages adaptés à chaque segment d'audience en temps réel, avec un niveau de personnalisation autrefois inatteignable." },
  { id: 2, title: "Le nouveau visage des réseaux sociaux en 2026", summary: "TikTok, Instagram, LinkedIn : quelles plateformes dominent et comment s'adapter.", category: "Social Media", date: "18 mai 2026", author: "Marcus Dubois", readTime: "4 min", views: "8.7k", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80&fit=crop", trending: true, content: "Les réseaux sociaux continuent de se réinventer. Si TikTok domine les classements, Instagram et LinkedIn ont opéré des transformations majeures. On observe une tendance forte vers l'authenticité : les contenus spontanés et bruts surperforment les productions trop léchées." },
  { id: 3, title: "Growth Hacking : 5 techniques pour 2026", summary: "Les stratégies de croissance les plus efficaces pour les startups et entreprises établies.", category: "Growth", date: "17 mai 2026", author: "Lena Park", readTime: "8 min", views: "5.2k", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&fit=crop", content: "Le growth hacking n'est plus réservé aux startups. Les entreprises de toutes tailles adoptent ces méthodes pour accélérer leur développement. Voici les 5 techniques qui donnent les meilleurs résultats : l'automatisation des entonnoirs, le marketing pair-à-pair, l'acquisition basée sur l'IA, l'optimisation des taux de conversion, et les programmes de fidélisation gamifiés." },
  { id: 4, title: "Branding : Comment construire une marque qui dure", summary: "Les principes fondamentaux du branding qui traversent les décennies.", category: "Branding", date: "16 mai 2026", author: "Sarah Chen", readTime: "5 min", views: "9.1k", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop", trending: true, content: "Construire une marque qui dure demande du temps et de la cohérence. Les marques qui traversent les décennies partagent des caractéristiques communes : une vision claire, des valeurs authentiques, une capacité d'évolution constante. Nike, Apple, Chanel — toutes ont su maintenir leur essence tout en se réinventant." },
  { id: 5, title: "Les outils IA indispensables pour les créatifs", summary: "Midjourney, Runway, ChatGPT : comment booster votre créativité avec l'IA.", category: "IA & Tech", date: "14 mai 2026", author: "John Chen", readTime: "4 min", views: "10.2k", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&fit=crop", trending: true, content: "Les outils d'IA générative ont révolutionné le travail des créatifs. Midjourney pour l'image, Runway pour la vidéo, ChatGPT pour le texte — ces outils sont devenus des assistants indispensables dans les studios modernes." },
  { id: 6, title: "Le marketing d'influence en 2026 : ce qui change", summary: "Micro-influenceurs, authenticité et ROI : les nouvelles règles du jeu.", category: "Marketing", date: "15 mai 2026", author: "Emma Thompson", readTime: "7 min", views: "6.8k", image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&fit=crop", content: "Le marketing d'influence a connu une transformation majeure. Les macro-influenceurs cèdent la place aux micro-influenceurs qui génèrent des taux d'engagement bien supérieurs. L'authenticité est devenue le critère n°1 en 2026." },
];

const videos = [
  { id: 1, title: "QUI SE CACHE DERRIÈRE LES ATTAQUES AU MALI ?", description: "Analyse des attaques coordonnées qui ont frappé plusieurs villes du Mali, l'alliance troublante entre le JNIM et le FLM.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&fit=crop", date: "19 mai 2026", duration: "16 min", category: "Chronique", featured: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "100 Tabous", image: "https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=400&q=80&fit=crop", duration: "45 min", category: "Documentaire", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 3, title: "Immigration clandestine", image: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=400&q=80&fit=crop", duration: "52 min", category: "Documentaire", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 4, title: "Reportage Mali", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop", duration: "38 min", category: "Reportage", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 5, title: "Chronique politique", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80&fit=crop", duration: "25 min", category: "Chronique", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

const podcasts = [
  { id: 1, title: "Le futur du marketing digital", description: "Comment les marques se réinventent à l'ère de l'IA.", duration: "42 min", date: "18 mai 2026", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop", guests: "Sarah Chen" },
  { id: 2, title: "Stratégies de croissance pour 2026", description: "Les leviers pour accélérer votre développement.", duration: "35 min", date: "15 mai 2026", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80&fit=crop", guests: "Marcus Dubois" },
  { id: 3, title: "L'art de la persuasion", description: "Techniques pour convaincre sans manipuler.", duration: "28 min", date: "12 mai 2026", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80&fit=crop", guests: "Lena Park" },
  { id: 4, title: "Innovation responsable", description: "Les enjeux éthiques de la technologie moderne.", duration: "52 min", date: "8 mai 2026", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&fit=crop", guests: "Dr. Anna Lee" },
];

const liveStreams = [
  { id: 1, title: "Débat : L'avenir de l'Afrique", date: "20 mai 2026", time: "19h00", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80&fit=crop", status: "À venir" },
  { id: 2, title: "Direct : Élections au Mali", date: "22 mai 2026", time: "18h00", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop", status: "En direct" },
  { id: 3, title: "Interview exclusive : Mamadou Diallo", date: "25 mai 2026", time: "20h00", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop", status: "À venir" },
];

const newsCategories = ["Tout", "IA & Tech", "Social Media", "Growth", "Branding", "Marketing"];
const mediaCategories = ["Vidéos", "Podcast", "En direct"];

// ─── STYLES ───────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── PAGE ───────────────────────────────────────────────── */
  .smartsell-page {
    min-height: 100vh;
    background: #07060F;
    color: #EDE9FF;
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  /* ── HERO ───────────────────────────────────────────────── */
  .smartsell-hero {
    position: relative;
    padding: 80px 48px 60px;
    overflow: hidden;
  }
  .smartsell-hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .smartsell-hero-orb--1 {
    width: 500px;
    height: 500px;
    top: -150px;
    right: -100px;
    background: radial-gradient(circle, rgba(108,61,232,0.35) 0%, transparent 70%);
  }
  .smartsell-hero-orb--2 {
    width: 300px;
    height: 300px;
    bottom: -80px;
    left: 10%;
    background: radial-gradient(circle, rgba(245,166,35,0.2) 0%, transparent 70%);
  }
  .smartsell-hero-inner {
    position: relative;
    z-index: 1;
    max-width: 1300px;
    margin: 0 auto;
  }
  .smartsell-hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #F5A623;
    margin-bottom: 24px;
  }
  .smartsell-hero-eyebrow::before {
    content: '';
    display: block;
    width: 28px;
    height: 2px;
    background: #F5A623;
  }
  .smartsell-hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(38px, 5vw, 68px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -1.5px;
    max-width: 800px;
    background: linear-gradient(135deg, #ffffff 0%, #c4b8ff 60%, #9d8aff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
  }
  .smartsell-hero-sub {
    font-size: 17px;
    color: rgba(237,233,255,0.5);
    max-width: 520px;
    line-height: 1.7;
    margin-bottom: 40px;
    font-weight: 300;
  }

  /* ── TAB SWITCHER ───────────────────────────────────────── */
  .smartsell-tabs {
    display: inline-flex;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 100px;
    padding: 5px;
    gap: 4px;
    position: relative;
  }
  .smartsell-tab-btn {
    position: relative;
    z-index: 1;
    padding: 10px 28px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;
    background: transparent;
    color: rgba(237,233,255,0.45);
  }
  .smartsell-tab-btn--active {
    color: #07060F;
  }
  .smartsell-tab-bg {
    position: absolute;
    top: 5px;
    border-radius: 100px;
    height: calc(100% - 10px);
    background: linear-gradient(135deg, #F5A623, #E8891A);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    pointer-events: none;
  }

  /* ── STATS ───────────────────────────────────────────────── */
  .smartsell-stats {
    display: flex;
    gap: 40px;
    margin-top: 40px;
  }
  .smartsell-stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .smartsell-stat-number {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #fff;
  }
  .smartsell-stat-label {
    font-size: 12px;
    color: rgba(237,233,255,0.4);
    letter-spacing: 0.5px;
  }

  /* ── LAYOUT ─────────────────────────────────────────────── */
  .smartsell-layout {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 48px 80px;
  }

  /* ── SECTION HEADER ────────────────────────────────────── */
  .smartsell-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
  }
  .smartsell-section-title {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }
  .smartsell-section-link {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #F5A623;
    background: transparent;
    border: 1px solid rgba(245,166,35,0.3);
    padding: 6px 16px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .smartsell-section-link:hover {
    background: rgba(245,166,35,0.1);
    border-color: #F5A623;
  }

  /* ── CATEGORY BAR ───────────────────────────────────────── */
  .smartsell-category-bar {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }
  .smartsell-category-btn {
    padding: 7px 18px;
    border-radius: 100px;
    border: 1px solid rgba(255,255,255,0.1);
    background: transparent;
    color: rgba(237,233,255,0.5);
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
  }
  .smartsell-category-btn:hover {
    color: #EDE9FF;
    border-color: rgba(255,255,255,0.2);
  }
  .smartsell-category-btn--active {
    background: rgba(108,61,232,0.2);
    border-color: rgba(108,61,232,0.6);
    color: #c4b8ff;
  }

  /* ── FEATURED CARD ──────────────────────────────────────── */
  .smartsell-featured {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 24px;
    overflow: hidden;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    margin-bottom: 24px;
    cursor: pointer;
    transition: border-color 0.3s;
  }
  .smartsell-featured:hover {
    border-color: rgba(108,61,232,0.4);
  }
  .smartsell-featured-image {
    position: relative;
    height: 340px;
    overflow: hidden;
  }
  .smartsell-featured-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s;
  }
  .smartsell-featured:hover .smartsell-featured-image img {
    transform: scale(1.04);
  }
  .smartsell-featured-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: rgba(108,61,232,0.85);
    backdrop-filter: blur(8px);
    padding: 5px 14px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #c4b8ff;
    font-family: 'Syne', sans-serif;
  }
  .smartsell-featured-trending {
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(245,166,35,0.15);
    border: 1px solid rgba(245,166,35,0.4);
    backdrop-filter: blur(8px);
    padding: 5px 12px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 600;
    color: #F5A623;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .smartsell-featured-body {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .smartsell-featured-category {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #F5A623;
    margin-bottom: 14px;
    font-family: 'Syne', sans-serif;
  }
  .smartsell-featured-title {
    font-family: 'Syne', sans-serif;
    font-size: 26px;
    font-weight: 800;
    line-height: 1.25;
    color: #fff;
    margin-bottom: 14px;
  }
  .smartsell-featured-summary {
    font-size: 14px;
    color: rgba(237,233,255,0.55);
    line-height: 1.7;
    margin-bottom: 24px;
  }
  .smartsell-featured-meta {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 12px;
    color: rgba(237,233,255,0.35);
    margin-bottom: 24px;
  }
  .smartsell-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #6C3DE8, #5429C7);
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 100px;
    cursor: pointer;
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 700;
    transition: all 0.2s;
    width: fit-content;
  }
  .smartsell-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(108,61,232,0.4);
  }

  /* ── ARTICLES GRID ──────────────────────────────────────── */
  .smartsell-articles-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .smartsell-article-card {
    border-radius: 18px;
    overflow: hidden;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    cursor: pointer;
    transition: all 0.3s;
  }
  .smartsell-article-card:hover {
    transform: translateY(-4px);
    border-color: rgba(108,61,232,0.3);
    background: rgba(108,61,232,0.05);
  }
  .smartsell-article-image {
    position: relative;
    height: 160px;
    overflow: hidden;
  }
  .smartsell-article-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  .smartsell-article-card:hover .smartsell-article-image img {
    transform: scale(1.05);
  }
  .smartsell-article-badge {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(7,6,15,0.8);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 3px 10px;
    border-radius: 6px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: rgba(237,233,255,0.7);
  }
  .smartsell-article-body {
    padding: 16px;
  }
  .smartsell-article-title {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #EDE9FF;
    line-height: 1.4;
    margin-bottom: 8px;
  }
  .smartsell-article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }
  .smartsell-article-author {
    font-size: 11px;
    color: rgba(237,233,255,0.35);
  }
  .smartsell-article-read {
    font-size: 11px;
    color: rgba(108,61,232,0.8);
    font-weight: 600;
  }

  /* ── MEDIA SECTION ──────────────────────────────────────── */
  .smartsell-media-section {
    margin-bottom: 60px;
  }
  .smartsell-media-category-bar {
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
  }
  .smartsell-media-category-btn {
    padding: 8px 22px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.08);
    background: transparent;
    color: rgba(237,233,255,0.45);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .smartsell-media-category-btn:hover {
    color: #EDE9FF;
    border-color: rgba(255,255,255,0.2);
  }
  .smartsell-media-category-btn--active {
    background: rgba(245,166,35,0.12);
    border-color: rgba(245,166,35,0.4);
    color: #F5A623;
  }

  /* ── FEATURED VIDEO ─────────────────────────────────────── */
  .smartsell-featured-video {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    border-radius: 24px;
    overflow: hidden;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    margin-bottom: 24px;
  }
  .smartsell-fv-image {
    position: relative;
    height: 360px;
    cursor: pointer;
    overflow: hidden;
  }
  .smartsell-fv-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s;
  }
  .smartsell-featured-video:hover .smartsell-fv-image img {
    transform: scale(1.04);
  }
  .smartsell-fv-play {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.25);
  }
  .smartsell-fv-play-circle {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(245,166,35,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    border: 3px solid rgba(255,255,255,0.3);
  }
  .smartsell-fv-image:hover .smartsell-fv-play-circle {
    transform: scale(1.1);
    background: #F5A623;
  }
  .smartsell-fv-play-icon {
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 20px solid #07060F;
    margin-left: 4px;
  }
  .smartsell-fv-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: rgba(245,166,35,0.9);
    padding: 5px 14px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 800;
    color: #07060F;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: 'Syne', sans-serif;
  }
  .smartsell-fv-meta {
    position: absolute;
    bottom: 16px;
    left: 16px;
    display: flex;
    gap: 10px;
  }
  .smartsell-fv-tag {
    background: rgba(7,6,15,0.75);
    backdrop-filter: blur(8px);
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 11px;
    color: rgba(237,233,255,0.7);
  }
  .smartsell-fv-body {
    padding: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .smartsell-fv-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #F5A623;
    margin-bottom: 14px;
    font-family: 'Syne', sans-serif;
  }
  .smartsell-fv-title {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    line-height: 1.25;
    margin-bottom: 16px;
  }
  .smartsell-fv-description {
    font-size: 14px;
    color: rgba(237,233,255,0.5);
    line-height: 1.7;
    margin-bottom: 24px;
  }

  /* ── VIDEO GRID ─────────────────────────────────────────── */
  .smartsell-video-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  .smartsell-video-card {
    border-radius: 16px;
    overflow: hidden;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    cursor: pointer;
    transition: all 0.3s;
  }
  .smartsell-video-card:hover {
    transform: translateY(-4px);
    border-color: rgba(245,166,35,0.3);
  }
  .smartsell-video-image {
    position: relative;
    height: 140px;
    overflow: hidden;
  }
  .smartsell-video-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  .smartsell-video-card:hover .smartsell-video-image img {
    transform: scale(1.05);
  }
  .smartsell-video-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .smartsell-video-card:hover .smartsell-video-overlay {
    opacity: 1;
  }
  .smartsell-video-play-sm {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(245,166,35,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .smartsell-video-play-sm .smartsell-fv-play-icon {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 14px solid #07060F;
    margin-left: 3px;
  }
  .smartsell-video-category {
    position: absolute;
    top: 8px;
    left: 8px;
    background: rgba(7,6,15,0.8);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 2px 8px;
    border-radius: 5px;
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #F5A623;
  }
  .smartsell-video-body {
    padding: 12px 14px;
  }
  .smartsell-video-title {
    font-family: 'Syne', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #EDE9FF;
    line-height: 1.4;
    margin-bottom: 6px;
  }
  .smartsell-video-duration {
    font-size: 11px;
    color: rgba(237,233,255,0.3);
  }

  /* ── PODCAST GRID ───────────────────────────────────────── */
  .smartsell-podcast-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  .smartsell-podcast-card {
    display: flex;
    gap: 16px;
    padding: 18px;
    border-radius: 18px;
    cursor: pointer;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    transition: all 0.3s;
  }
  .smartsell-podcast-card:hover {
    border-color: rgba(245,166,35,0.3);
    background: rgba(245,166,35,0.03);
    transform: translateY(-2px);
  }
  .smartsell-podcast-image {
    width: 70px;
    height: 70px;
    border-radius: 12px;
    object-fit: cover;
    flex-shrink: 0;
  }
  .smartsell-podcast-body {
    flex: 1;
  }
  .smartsell-podcast-title {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #EDE9FF;
    margin-bottom: 5px;
    line-height: 1.35;
  }
  .smartsell-podcast-description {
    font-size: 12px;
    color: rgba(237,233,255,0.4);
    margin-bottom: 8px;
    line-height: 1.5;
  }
  .smartsell-podcast-footer {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .smartsell-podcast-duration {
    font-size: 11px;
    color: #F5A623;
    font-weight: 600;
  }
  .smartsell-podcast-guests {
    font-size: 11px;
    color: rgba(237,233,255,0.3);
  }
  .smartsell-podcast-play {
    margin-left: auto;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(245,166,35,0.1);
    border: 1px solid rgba(245,166,35,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F5A623;
    flex-shrink: 0;
    cursor: pointer;
    transition: background 0.2s;
  }
  .smartsell-podcast-play:hover {
    background: rgba(245,166,35,0.2);
  }

  /* ── LIVE GRID ──────────────────────────────────────────── */
  .smartsell-live-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
  .smartsell-live-card {
    border-radius: 18px;
    overflow: hidden;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    cursor: pointer;
    transition: all 0.3s;
  }
  .smartsell-live-card:hover {
    transform: translateY(-4px);
    border-color: rgba(108,61,232,0.3);
  }
  .smartsell-live-image {
    position: relative;
    height: 160px;
    overflow: hidden;
  }
  .smartsell-live-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .smartsell-live-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 700;
    font-family: 'Syne', sans-serif;
  }
  .smartsell-live-badge--live {
    background: rgba(239,68,68,0.9);
    color: #fff;
  }
  .smartsell-live-badge--upcoming {
    background: rgba(245,166,35,0.9);
    color: #07060F;
  }
  .smartsell-live-body {
    padding: 16px;
  }
  .smartsell-live-title {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #EDE9FF;
    margin-bottom: 6px;
  }
  .smartsell-live-time {
    font-size: 12px;
    color: rgba(237,233,255,0.35);
  }

  /* ── MODAL ───────────────────────────────────────────────── */
  .smartsell-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(7,6,15,0.92);
    backdrop-filter: blur(20px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }
  .smartsell-modal-box {
    width: 100%;
    max-width: 860px;
    background: rgba(20,16,40,0.98);
    border-radius: 28px;
    border: 1px solid rgba(255,255,255,0.1);
    overflow: hidden;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  }
  .smartsell-modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    z-index: 10;
    transition: background 0.2s;
  }
  .smartsell-modal-close:hover {
    background: rgba(255,255,255,0.15);
  }
  .smartsell-modal-image {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;
  }
  .smartsell-modal-body {
    padding: 32px;
  }
  .smartsell-modal-category {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #F5A623;
    margin-bottom: 12px;
    font-family: 'Syne', sans-serif;
  }
  .smartsell-modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 24px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 12px;
    line-height: 1.3;
  }
  .smartsell-modal-meta {
    display: flex;
    gap: 16px;
    font-size: 12px;
    color: rgba(237,233,255,0.35);
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .smartsell-modal-content {
    font-size: 15px;
    color: rgba(237,233,255,0.65);
    line-height: 1.8;
  }
  .smartsell-modal-video {
    position: relative;
    padding-bottom: 56.25%;
    background: #000;
  }
  .smartsell-modal-video iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* ── NEWSLETTER ──────────────────────────────────────────── */
  .smartsell-newsletter {
    background: linear-gradient(
      135deg,
      rgba(108,61,232,0.15) 0%,
      rgba(245,166,35,0.08) 100%
    );
    border: 1px solid rgba(108,61,232,0.25);
    border-radius: 24px;
    padding: 48px;
    text-align: center;
    margin-top: 60px;
  }
  .smartsell-newsletter-title {
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 10px;
  }
  .smartsell-newsletter-sub {
    font-size: 15px;
    color: rgba(237,233,255,0.5);
    margin-bottom: 28px;
  }
  .smartsell-newsletter-form {
    display: flex;
    gap: 8px;
    max-width: 440px;
    margin: 0 auto;
  }
  .smartsell-newsletter-input {
    flex: 1;
    padding: 13px 20px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 100px;
    color: #EDE9FF;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
  }
  .smartsell-newsletter-input::placeholder {
    color: rgba(237,233,255,0.3);
  }
  .smartsell-newsletter-input:focus {
    border-color: rgba(108,61,232,0.5);
  }
  .smartsell-newsletter-btn {
    padding: 13px 24px;
    background: linear-gradient(135deg, #F5A623, #E8891A);
    border: none;
    border-radius: 100px;
    color: #07060F;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
  }
  .smartsell-newsletter-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(245,166,35,0.35);
  }

  /* ── RESPONSIVE ──────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .smartsell-hero { padding: 60px 32px 48px; }
    .smartsell-layout { padding: 0 32px 60px; }
    .smartsell-featured { grid-template-columns: 1fr; }
    .smartsell-featured-image { height: 240px; }
    .smartsell-articles-grid { grid-template-columns: repeat(2, 1fr); }
    .smartsell-featured-video { grid-template-columns: 1fr; }
    .smartsell-fv-image { height: 240px; }
    .smartsell-video-grid { grid-template-columns: repeat(2, 1fr); }
    .smartsell-live-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .smartsell-hero { padding: 48px 20px 36px; }
    .smartsell-layout { padding: 0 20px 48px; }
    .smartsell-stats { gap: 24px; flex-wrap: wrap; }
    .smartsell-articles-grid { grid-template-columns: 1fr; }
    .smartsell-video-grid { grid-template-columns: 1fr; }
    .smartsell-podcast-grid { grid-template-columns: 1fr; }
    .smartsell-live-grid { grid-template-columns: 1fr; }
    .smartsell-newsletter-form { flex-direction: column; }
    .smartsell-modal-overlay { padding: 16px; }
    .smartsell-modal-box { border-radius: 20px; }
    .smartsell-modal-close { width: 36px; height: 36px; top: 12px; right: 12px; font-size: 16px; }
    .smartsell-featured-body { padding: 24px; }
    .smartsell-fv-body { padding: 24px; }
    .smartsell-newsletter { padding: 32px 20px; }
  }

  /* ── REDUCED MOTION ────────────────────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    .smartsell-featured-image img,
    .smartsell-article-image img,
    .smartsell-video-image img,
    .smartsell-fv-image img,
    .smartsell-featured,
    .smartsell-article-card,
    .smartsell-video-card,
    .smartsell-podcast-card,
    .smartsell-live-card,
    .smartsell-fv-play-circle,
    .smartsell-video-overlay,
    .smartsell-tab-bg,
    .smartsell-btn-primary,
    .smartsell-newsletter-btn,
    .smartsell-section-link {
      transition: none !important;
      transform: none !important;
      animation: none !important;
    }
  }
`;

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function ActualitesMedia() {
  const [tab, setTab] = useState("news");
  const [newsCat, setNewsCat] = useState("Tout");
  const [mediaCat, setMediaCat] = useState("Vidéos");
  const [modal, setModal] = useState(null);
  const [tabBg, setTabBg] = useState({ left: 5, width: 0 });
  const tabRefs = useRef([]);

  useEffect(() => {
    const idx = tab === "news" ? 0 : 1;
    const el = tabRefs.current[idx];
    if (el) {
      const parent = el.parentElement;
      const rect = el.getBoundingClientRect();
      const pRect = parent.getBoundingClientRect();
      setTabBg({ left: rect.left - pRect.left, width: rect.width });
    }
  }, [tab]);

  const filteredArticles = newsCat === "Tout"
    ? articles
    : articles.filter(a => a.category === newsCat);

  const featuredArticle = articles.find(a => a.featured);
  const featuredVideo = videos.find(v => v.featured);
  const gridVideos = videos.filter(v => !v.featured);

  return (
    <>
      <style>{css}</style>
      <div className="smartsell-page">

        {/* ── HERO ── */}
        <section className="smartsell-hero">
          <div className="smartsell-hero-orb smartsell-hero-orb--1" />
          <div className="smartsell-hero-orb smartsell-hero-orb--2" />
          <div className="smartsell-hero-inner">
            <div className="smartsell-hero-eyebrow">Smartsell Studio</div>
            <h1 className="smartsell-hero-title">
              {tab === "news" ? "Actualités & Insights" : "Médias & Contenus"}
            </h1>
            <p className="smartsell-hero-sub">
              {tab === "news"
                ? "Les tendances digital & tech décryptées par nos experts. Analyse, actu et inspiration chaque semaine."
                : "Vidéos, podcasts et direct — le studio qui donne de la voix à votre univers."}
            </p>

            <div className="smartsell-tabs" role="tablist">
              <div className="smartsell-tab-bg" style={{ left: tabBg.left, width: tabBg.width }} />
              {[["news", "Actualités"], ["media", "Médias"]].map(([id, label], i) => (
                <button
                  key={id}
                  role="tab"
                  ref={el => (tabRefs.current[i] = el)}
                  className={`smartsell-tab-btn${tab === id ? " smartsell-tab-btn--active" : ""}`}
                  onClick={() => setTab(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="smartsell-stats">
              {tab === "news"
                ? [["50+", "Articles"], ["12k", "Lecteurs"], ["4.8★", "Note moyenne"], ["30+", "Experts"]].map(([n, l]) => (
                    <div className="smartsell-stat" key={l}>
                      <span className="smartsell-stat-number">{n}</span>
                      <span className="smartsell-stat-label">{l}</span>
                    </div>
                  ))
                : [["120+", "Vidéos"], ["48", "Podcasts"], ["8", "Lives/mois"], ["200k", "Vues totales"]].map(([n, l]) => (
                    <div className="smartsell-stat" key={l}>
                      <span className="smartsell-stat-number">{n}</span>
                      <span className="smartsell-stat-label">{l}</span>
                    </div>
                  ))
              }
            </div>
          </div>
        </section>

        {/* ── MAIN ── */}
        <div className="smartsell-layout">

          {tab === "news" && (
            <div>
              {/* Category filter */}
              <div className="smartsell-category-bar">
                {newsCategories.map(c => (
                  <button
                    key={c}
                    className={`smartsell-category-btn${newsCat === c ? " smartsell-category-btn--active" : ""}`}
                    onClick={() => setNewsCat(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Featured */}
              {featuredArticle && newsCat === "Tout" && (
                <div className="smartsell-featured" onClick={() => setModal({ type: "article", data: featuredArticle })}>
                  <div className="smartsell-featured-image">
                    <img src={featuredArticle.image} alt={featuredArticle.title} />
                    <div className="smartsell-featured-badge">À la une</div>
                    {featuredArticle.trending && (
                      <div className="smartsell-featured-trending">Tendance</div>
                    )}
                  </div>
                  <div className="smartsell-featured-body">
                    <div className="smartsell-featured-category">{featuredArticle.category}</div>
                    <h2 className="smartsell-featured-title">{featuredArticle.title}</h2>
                    <p className="smartsell-featured-summary">{featuredArticle.summary}</p>
                    <div className="smartsell-featured-meta">
                      <span>{featuredArticle.author}</span>
                      <span>{featuredArticle.readTime}</span>
                      <span>{featuredArticle.date}</span>
                    </div>
                    <button className="smartsell-btn-primary">Lire l'article →</button>
                  </div>
                </div>
              )}

              {/* Grid */}
              <div className="smartsell-section-header">
                <h2 className="smartsell-section-title">{newsCat === "Tout" ? "Tous les articles" : newsCat}</h2>
                <button className="smartsell-section-link">Voir tout</button>
              </div>
              <div className="smartsell-articles-grid">
                {filteredArticles.filter(a => !a.featured || newsCat !== "Tout").map(a => (
                  <article
                    className="smartsell-article-card"
                    key={a.id}
                    onClick={() => setModal({ type: "article", data: a })}
                  >
                    <div className="smartsell-article-image">
                      <img src={a.image} alt={a.title} loading="lazy" />
                      <span className="smartsell-article-badge">{a.category}</span>
                    </div>
                    <div className="smartsell-article-body">
                      <h3 className="smartsell-article-title">{a.title}</h3>
                      <div className="smartsell-article-footer">
                        <span className="smartsell-article-author">{a.author} · {a.date}</span>
                        <span className="smartsell-article-read">{a.readTime} →</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {tab === "media" && (
            <div className="smartsell-media-section">
              {/* Media sub-cat */}
              <div className="smartsell-media-category-bar">
                {mediaCategories.map(c => (
                  <button
                    key={c}
                    className={`smartsell-media-category-btn${mediaCat === c ? " smartsell-media-category-btn--active" : ""}`}
                    onClick={() => setMediaCat(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {mediaCat === "Vidéos" && (
                <>
                  {/* Featured video */}
                  {featuredVideo && (
                    <div className="smartsell-featured-video">
                      <div
                        className="smartsell-fv-image"
                        onClick={() => setModal({ type: "video", data: featuredVideo })}
                      >
                        <img src={featuredVideo.image} alt={featuredVideo.title} />
                        <div className="smartsell-fv-play">
                          <div className="smartsell-fv-play-circle">
                            <div className="smartsell-fv-play-icon" />
                          </div>
                        </div>
                        <div className="smartsell-fv-badge">Chronique</div>
                        <div className="smartsell-fv-meta">
                          <span className="smartsell-fv-tag">{featuredVideo.date}</span>
                          <span className="smartsell-fv-tag">{featuredVideo.duration}</span>
                        </div>
                      </div>
                      <div className="smartsell-fv-body">
                        <div className="smartsell-fv-label">Vidéo à la une</div>
                        <h2 className="smartsell-fv-title">{featuredVideo.title}</h2>
                        <p className="smartsell-fv-description">{featuredVideo.description}</p>
                        <button
                          className="smartsell-btn-primary"
                          onClick={() => setModal({ type: "video", data: featuredVideo })}
                        >
                          Regarder
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="smartsell-section-header">
                    <h2 className="smartsell-section-title">Vidéos récentes</h2>
                    <button className="smartsell-section-link">Voir tout</button>
                  </div>
                  <div className="smartsell-video-grid">
                    {gridVideos.map(v => (
                      <div
                        className="smartsell-video-card"
                        key={v.id}
                        onClick={() => setModal({ type: "video", data: v })}
                      >
                        <div className="smartsell-video-image">
                          <img src={v.image} alt={v.title} loading="lazy" />
                          <div className="smartsell-video-overlay">
                            <div className="smartsell-video-play-sm">
                              <div className="smartsell-fv-play-icon" />
                            </div>
                          </div>
                          <span className="smartsell-video-category">{v.category}</span>
                        </div>
                        <div className="smartsell-video-body">
                          <div className="smartsell-video-title">{v.title}</div>
                          <div className="smartsell-video-duration">{v.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {mediaCat === "Podcast" && (
                <>
                  <div className="smartsell-section-header">
                    <h2 className="smartsell-section-title">Épisodes podcast</h2>
                    <button className="smartsell-section-link">Voir tout</button>
                  </div>
                  <div className="smartsell-podcast-grid">
                    {podcasts.map(p => (
                      <div className="smartsell-podcast-card" key={p.id}>
                        <img className="smartsell-podcast-image" src={p.image} alt={p.title} loading="lazy" />
                        <div className="smartsell-podcast-body">
                          <div className="smartsell-podcast-title">{p.title}</div>
                          <div className="smartsell-podcast-description">{p.description}</div>
                          <div className="smartsell-podcast-footer">
                            <span className="smartsell-podcast-duration">{p.duration}</span>
                            <span className="smartsell-podcast-guests">Avec {p.guests}</span>
                            <div className="smartsell-podcast-play">▶</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {mediaCat === "En direct" && (
                <>
                  <div className="smartsell-section-header">
                    <h2 className="smartsell-section-title">Lives & événements</h2>
                    <button className="smartsell-section-link">S'inscrire aux alertes</button>
                  </div>
                  <div className="smartsell-live-grid">
                    {liveStreams.map(l => (
                      <div className="smartsell-live-card" key={l.id}>
                        <div className="smartsell-live-image">
                          <img src={l.image} alt={l.title} loading="lazy" />
                          <span className={`smartsell-live-badge smartsell-live-badge--${l.status === "En direct" ? "live" : "upcoming"}`}>
                            {l.status === "En direct" ? "En direct" : l.status}
                          </span>
                        </div>
                        <div className="smartsell-live-body">
                          <div className="smartsell-live-title">{l.title}</div>
                          <div className="smartsell-live-time">{l.date} · {l.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Newsletter */}
          <div className="smartsell-newsletter">
            <h2 className="smartsell-newsletter-title">Ne manquez rien</h2>
            <p className="smartsell-newsletter-sub">
              Articles, vidéos et podcasts sélectionnés chaque semaine dans votre boîte mail.
            </p>
            <div className="smartsell-newsletter-form">
              <input
                className="smartsell-newsletter-input"
                type="email"
                placeholder="votre@email.com"
              />
              <button className="smartsell-newsletter-btn">S'abonner →</button>
            </div>
          </div>
        </div>

        {/* ── MODAL ── */}
        {modal && (
          <div className="smartsell-modal-overlay" onClick={() => setModal(null)}>
            <div className="smartsell-modal-box" onClick={e => e.stopPropagation()}>
              <button className="smartsell-modal-close" onClick={() => setModal(null)}>✕</button>

              {modal.type === "article" && (
                <>
                  <img className="smartsell-modal-image" src={modal.data.image} alt={modal.data.title} />
                  <div className="smartsell-modal-body">
                    <div className="smartsell-modal-category">{modal.data.category}</div>
                    <h2 className="smartsell-modal-title">{modal.data.title}</h2>
                    <div className="smartsell-modal-meta">
                      <span>{modal.data.author}</span>
                      <span>{modal.data.readTime}</span>
                      <span>{modal.data.date}</span>
                      <span>{modal.data.views} vues</span>
                    </div>
                    <p className="smartsell-modal-content">{modal.data.content}</p>
                  </div>
                </>
              )}

              {modal.type === "video" && (
                <>
                  <div className="smartsell-modal-video">
                    <iframe
                      src={modal.data.videoUrl}
                      title={modal.data.title}
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                  <div className="smartsell-modal-body">
                    <div className="smartsell-modal-category">{modal.data.category || "Vidéo"}</div>
                    <h2 className="smartsell-modal-title">{modal.data.title}</h2>
                    <div className="smartsell-modal-meta">
                      {modal.data.date && <span>{modal.data.date}</span>}
                      {modal.data.duration && <span>{modal.data.duration}</span>}
                    </div>
                    {modal.data.description && (
                      <p className="smartsell-modal-content">{modal.data.description}</p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}