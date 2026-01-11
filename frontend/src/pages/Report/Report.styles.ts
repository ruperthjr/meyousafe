import styled from 'styled-components';

export const ReportContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background: linear-gradient(90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.border}
  );
  transition: width 0.5s ease-out;
`;

export const ProgressSteps = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

export const ProgressStep = styled.div<{ $active: boolean; $completed: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  position: relative;
  opacity: ${({ $active, $completed }) => ($active || $completed ? 1 : 0.5)};
  transition: opacity ${({ theme }) => theme.transitions.normal};

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 16px;
    left: calc(50% + 20px);
    right: calc(-50% + 20px);
    height: 2px;
    background: ${({ theme, $completed }) =>
      $completed ? theme.colors.primary : theme.colors.border};
    transition: background ${({ theme }) => theme.transitions.normal};
    z-index: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }
  }
`;

export const ProgressStepNumber = styled.div<{ $active: boolean; $completed: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  background: ${({ theme, $active, $completed }) =>
    $active || $completed ? theme.colors.primary : theme.colors.border};
  color: ${({ theme, $active, $completed }) =>
    $active || $completed ? theme.colors.text.primary : theme.colors.text.tertiary};
  border: 2px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 28px;
    height: 28px;
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

export const ProgressStepLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

export const ContentContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  min-height: calc(100vh - 200px);
`;