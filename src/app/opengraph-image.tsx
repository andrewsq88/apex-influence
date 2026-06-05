import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Apex Influence — Influencer Marketing Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0a0f', backgroundImage: 'radial-gradient(ellipse at center, rgba(139,92,246,0.3) 0%, transparent 70%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontSize: 24, fontWeight: 700 }}>A</span>
          </div>
          <span style={{ fontSize: 36, fontWeight: 700, color: 'white' }}>Apex Influence</span>
        </div>
        <div style={{ fontSize: 52, fontWeight: 800, background: 'linear-gradient(to right, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', lineHeight: 1.2 }}>Where Influence</div>
        <div style={{ fontSize: 52, fontWeight: 800, background: 'linear-gradient(to right, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', lineHeight: 1.2 }}>Meets Impact</div>
        <div style={{ fontSize: 20, color: '#94a3b8', marginTop: 24 }}>Influencer Marketing for Brands & Creators</div>
      </div>
    ),
    { ...size }
  );
}
