import { Download,  Printer, FileJson } from 'lucide-react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';
import { CV } from '../../types/cv';
import { generateShareText, generateShareUrl, generateFileName } from '../../utils/sharing';
import { ExportButton } from './ExportButton';
import { ShareButton } from './ShareButton';

interface Props {
  cv: CV;
  onExportPDF: () => void;
  onPrint: () => void;
}

export function ExportOptions({ cv, onExportPDF, onPrint }: Props) {
  const shareUrl = generateShareUrl();
  const shareText = generateShareText(cv);

  const handleExportJSON = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(cv, null, 2)
    )}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', generateFileName(cv, 'json'));
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2">
      <div className="bg-white rounded-lg shadow-lg p-4 space-y-3">
        <ExportButton
          onClick={onExportPDF}
          label="Export as PDF"
          icon={<Download className="w-4 h-4" />}
        />
        
        <ExportButton
          onClick={onPrint}
          label="Print CV"
          icon={<Printer className="w-4 h-4" />}
        />
        
        <ExportButton
          onClick={handleExportJSON}
          label="Export as JSON"
          icon={<FileJson className="w-4 h-4" />}
        />

        <div className="border-t pt-3">
          <div className="flex gap-2 justify-center">
            <LinkedinShareButton url={shareUrl} title={shareText}>
              <ShareButton platform="LinkedIn" onClick={() => {}} />
            </LinkedinShareButton>
            
            <FacebookShareButton url={shareUrl} title={shareText}>
              <ShareButton platform="Facebook" onClick={() => {}} />
            </FacebookShareButton>
            
            <TwitterShareButton url={shareUrl} title={shareText}>
              <ShareButton platform="Twitter" onClick={() => {}} />
            </TwitterShareButton>
            
            <EmailShareButton url={shareUrl} subject={shareText}>
              <ShareButton platform="Email" onClick={() => {}} />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}