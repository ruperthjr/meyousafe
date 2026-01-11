import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshCw, Home, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Common/Button';
import { ROUTES } from '../../constants/routes';
import {
  RefreshContainer,
  RefreshContent,
  RefreshIcon,
  RefreshTitle,
  RefreshMessage,
  RefreshCode,
  RefreshInput,
  ButtonGroup,
  Spinner,
  InfoBox,
} from './Refresh.styles';

export const Refresh: React.FC = () => {
  const navigate = useNavigate();
  const [referenceCode, setReferenceCode] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCode = localStorage.getItem('last_reference_code');
    if (savedCode) {
      setReferenceCode(savedCode);
    }
  }, []);

  const handleRefresh = async () => {
    if (!referenceCode || referenceCode.length < 9) {
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      localStorage.setItem('last_reference_code', referenceCode);
      navigate(ROUTES.REPORT);
    } catch (error) {
      console.error('Failed to refresh report:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RefreshContainer>
      <RefreshContent>
        <RefreshIcon>
          <RefreshCw size={64} />
        </RefreshIcon>
        <RefreshTitle>Continue Your Report</RefreshTitle>
        <RefreshMessage>
          Enter your reference code to continue working on your saved report
        </RefreshMessage>

        <InfoBox>
          <strong>Reference Code Format:</strong> XXXX-XXXX (e.g., AB12-CD34)
        </InfoBox>

        <RefreshCode>
          <label htmlFor="reference-code">Reference Code</label>
          <RefreshInput
            id="reference-code"
            type="text"
            placeholder="XXXX-XXXX"
            value={referenceCode}
            onChange={(e) => setReferenceCode(e.target.value.toUpperCase())}
            maxLength={9}
          />
        </RefreshCode>

        {loading && <Spinner />}

        <ButtonGroup>
          <Button
            size="large"
            onClick={handleRefresh}
            disabled={!referenceCode || referenceCode.length < 9 || loading}
            rightIcon={<ArrowRight size={20} />}
            isLoading={loading}
          >
            Continue Report
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={() => navigate(ROUTES.HOME)}
            leftIcon={<Home size={20} />}
          >
            Back to Home
          </Button>
        </ButtonGroup>
      </RefreshContent>
    </RefreshContainer>
  );
};

export default Refresh;