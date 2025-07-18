'use client';
import { useHandleScroll } from '../lib/hooks/usehandleScroll';
import useHeaderBackground from '../lib/hooks/useHeaderBackground';
import { useScrollAnimation } from '../lib/hooks/useScrollAnimation';
import React from 'react';

export default function ScrollEffects({ children }: { children: React.ReactNode }) {
  useHandleScroll();
  useHeaderBackground();
  useScrollAnimation();
  return <>{children}</>;
} 