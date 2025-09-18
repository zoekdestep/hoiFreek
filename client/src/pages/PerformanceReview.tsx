import ConfettiBackground from '@/components/ConfettiBackground';
import ConfettiExplosion from '@/components/ConfettiExplosion';
import StarRating from '@/components/StarRating';
import WinsSection from '@/components/WinsSection';
import ExpandableSection from '@/components/ExpandableSection';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState, useEffect } from 'react';
import { FileText, Users, Shield, ImageOff, AlertTriangle, Trophy, Heart, MessageSquare } from 'lucide-react';
import lolaImage from '@assets/WhatsApp Image 2025-09-16 at 18.56.04_1758041920974.jpeg';

export default function PerformanceReview() {
  const [isCalibrationOpen, setIsCalibrationOpen] = useState(false);
  const [is404Open, setIs404Open] = useState(false);
  const [isPromotionOpen, setIsPromotionOpen] = useState(false);
  const [showConfettiExplosion, setShowConfettiExplosion] = useState(false);
  const [showWrongChoiceError, setShowWrongChoiceError] = useState(false);
  const [signalClickCount, setSignalClickCount] = useState(0);
  const [ropeClickCount, setRopeClickCount] = useState(0);
  const [companionClickCount, setCompanionClickCount] = useState(0);
  const [showLolaApproval, setShowLolaApproval] = useState(false);
  const [showBoyfriendReward, setShowBoyfriendReward] = useState(false);
  const [relationshipProgress, setRelationshipProgress] = useState(20);
  const [progressInterval, setProgressInterval] = useState<NodeJS.Timeout | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  // Colors for confetti decoration
  const colors = [
    'hsl(320, 75%, 65%)', // pink
    'hsl(200, 85%, 60%)', // blue
    'hsl(280, 70%, 65%)', // purple
    'hsl(35, 85%, 55%)',  // orange
    'hsl(142, 69%, 45%)', // green
    'hsl(60, 85%, 60%)',  // yellow
  ];
  
  // Expose function globally so the HTML content can call it
  useEffect(() => {
    (window as any).openPicturesModal = () => setIs404Open(true);
    return () => {
      delete (window as any).openPicturesModal;
    };
  }, []);
  
  const coreCompetenciesContent = [
    '<b>Full-Stack Founder Leverage:</b> Operated as product, engineering, marketing, and sales simultaneously, shipping Stringkick Games with six-star efficiency without too much scope creep.',
    '<b>Tasteful Instincts:</b> Demonstrated strong judgment on when to trust data, when to trust intuition, and when to let someone else hold the ropes (hehe.).',
    '<b>Transparent Communication:</b> Shipped highly innovative products and ran structured campaigns, all while sustaining high-quality partner communication, from calibration calls to late-night Signal messages.'
  ];

  const impactHighlightsContent = [
    '<b>Data driven stakeholder management:</b> Engaged with early adopters, alumni, Redditors, and one (1) bull terrier named Lola. Initial attempts at teaching "give paw" have yet to achieve KPI compliance but significantly strengthened cross-species relationship capital #bestdayever.',
    '<b>Portfolio Expansion:</b> Successfully expanded StringKick from guitar learning to gamified experiences, and expanded personal portfolio by onboarding a new primary to 20% (<span class="text-blue-600 underline cursor-pointer hover:text-blue-800" onclick="openPicturesModal()">view pictures of subject + primary</span>).',
    '<b>Revenue & ROI:</b> Drove +50% overachievement on license sales, while also catalyzing significant adjacent partner spending (The Frame TV, curtains, Steam Deck, gin inventory, and comfortable-yet-ugly chair CAPEX).'
  ];


  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ConfettiBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto p-6 space-y-8">
        <StarRating rating={6} />
        
        <WinsSection />
        
        <div className="space-y-4">
          <ExpandableSection
            title="Core Competencies & Execution Excellence"
            content={coreCompetenciesContent}
            testId="section-core-competencies"
          />
          
          <ExpandableSection
            title="Impact Highlights & Portfolio Growth"
            content={impactHighlightsContent}
            testId="section-impact-highlights"
          />
          
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center py-8">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl px-12 py-6 shadow-xl hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
            size="lg"
            data-testid="button-accept-promotion"
            onClick={() => {
              // Reset all button states when opening modal
              setSignalClickCount(0);
              setRopeClickCount(0);
              setCompanionClickCount(0);
              setRelationshipProgress(20);
              setIsPromotionOpen(true);
            }}
          >
            🎉 Accept Promotion
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-purple-400 text-purple-700 font-semibold text-lg px-10 py-6 bg-purple-50/80 hover:bg-purple-100 hover:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-200"
            data-testid="button-view-calibration"
            onClick={() => setIsCalibrationOpen(true)}
          >
            📋 View Calibration Notes
          </Button>
        </div>
        
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground italic" data-testid="text-footer">
            Proudly built by STVI Corp™️.
          </p>
        </div>
      </div>

      {/* Calibration Notes Modal */}
      <Dialog open={isCalibrationOpen} onOpenChange={setIsCalibrationOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 shadow-lg">
          <DialogHeader className="relative">
            <div className="absolute -top-2 -right-2 transform rotate-12">
              <div className="bg-red-600 text-white px-4 py-2 rounded-full border-4 border-red-700 shadow-lg">
                <div className="flex items-center gap-2 font-bold text-lg">
                  <Shield className="w-5 h-5" />
                  CONFIDENTIAL
                </div>
              </div>
            </div>
            
            <DialogTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" />
              Performance Calibration Meeting - Minutes
            </DialogTitle>
            
            <DialogDescription className="text-slate-600 mt-2">
              Official calibration committee findings and recommendations
            </DialogDescription>

            {/* Meeting Meta Info */}
            <div className="text-sm text-slate-500 mt-4 space-y-1" data-testid="minutes-meta">
              <div><strong>Meeting Date:</strong> 16 September 2025</div>
              <div><strong>Attendees:</strong> Stéphanie Florence (Senior 20% Partner & Calibration Lead), Lola (Strategic Stakeholder & Morale Officer)</div>
              <div><strong>Subject:</strong> Performance Calibration Review - Freek Just Rijna</div>
            </div>
          </DialogHeader>

          <TooltipProvider>
          <div className="space-y-6 mt-6">
            {/* Executive Summary */}
            <div data-testid="minutes-summary">
              <h3 className="font-semibold text-slate-900 mb-3">Executive Summary</h3>
              <p className="text-slate-700 leading-relaxed">
                Committee convened to review exceptional performance metrics and determine appropriate rating adjustments. 
                Initial five-star framework proved insufficient for sustained solo execution over 9+ months. 
                Unanimous decision to expand rating scale and approve promotion with noted bias disclosure.
              </p>
            </div>

            <Separator />

            {/* Decisions Table */}
            <div data-testid="minutes-decisions">
              <h3 className="font-semibold text-slate-900 mb-3">Key Decisions</h3>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-1/3">Topic</TableHead>
                    <TableHead className="w-1/3">Decision</TableHead>
                    <TableHead>Rationale</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-transparent">
                    <TableCell className="font-medium">Rating Scale</TableCell>
                    <TableCell>Expand to 6-star system</TableCell>
                    <TableCell>Original benchmarks inadequate for performance level</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-transparent">
                    <TableCell className="font-medium">CAPEX Expenses</TableCell>
                    <TableCell>Approve as strategic investments</TableCell>
                    <TableCell>Partner portfolio benefits justify expenditure</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-transparent">
                    <TableCell className="font-medium">Final Rating</TableCell>
                    <TableCell>Six-Star Product Builder</TableCell>
                    <TableCell>Unanimous approval despite declared bias</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <Separator />

            {/* Discussion Notes */}
            <div data-testid="minutes-notes">
              <h3 className="font-semibold text-slate-900 mb-3">Discussion Notes</h3>
              
              <div className="space-y-4 text-slate-700">
                <div>
                  <h4 className="font-medium text-slate-800">CAPEX Analysis</h4>
                  <p>Indirect household expenses flagged: Frame TV, curtains, Steam Deck, gin inventory, comfortable chair <em>(aesthetically questionable but functionally sound)</em>. After debate, committee accepted these as strategic partner investments rather than discretionary spending.*</p>
                </div>

                <div>
                  <h4 className="font-medium text-slate-800">Stakeholder Relations</h4>
                  <p>Lola's training progress remains <s>disappointing</s> challenging. "Give paw" KPI remains red on dashboard. However, cross-species morale impact deemed significant enough to tolerate performance gap. <em>(Note: Treats budget approved for Q4)</em></p>
                </div>

                <div>
                  <h4 className="font-medium text-slate-800">Communication Excellence</h4>
                  <p>Late-night Signal messages questioned for sustainability. Committee acknowledged unconventional hours but determined partner engagement value justifies current communication cadence.</p>
                </div>

                <div>
                  <h4 className="font-medium text-slate-800">Portfolio Innovation</h4>
                  <p>Expansion from guitar learning → gamified experiences → 20% partner onboarding considered highly innovative. Methodology bias declared but recommendation upheld unanimously.</p>
                </div>

                <div>
                  <h4 className="font-medium text-slate-800">Competency Assessment</h4>
                  <p>Various <Tooltip><TooltipTrigger className="bg-red-100/60 px-1 py-0.5 rounded cursor-help hover:bg-red-100/80 transition-colors text-red-800">[REDACTED]</TooltipTrigger><TooltipContent className="bg-slate-700 text-white border-slate-600">was: erotic</TooltipContent></Tooltip> competencies acknowledged but deemed out of scope for this calibration cycle. Documentation filed for future performance reviews.**</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Final Decision */}
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/30" data-testid="minutes-final">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <h4 className="font-semibold text-slate-900">Final Committee Decision</h4>
              </div>
              <p className="text-slate-700">
                <strong>APPROVED:</strong> Promotion to Six-Star Product Builder and Founder. <em>Bias declared (20% relationship status) but recommendation approved unanimously.</em>
              </p>
            </div>

            {/* Footer */}
            <div className="text-xs text-slate-500 space-y-1 pt-4 border-t border-slate-200">
              <p><strong>Document Classification:</strong> Confidential - Partner Eyes Only</p>
              <p>* See CAPEX Justification Memo, Appendix A</p>
              <p>** Competency documentation filed under separate cover</p>
            </div>
          </div>
          </TooltipProvider>
        </DialogContent>
      </Dialog>

      {/* 404 Pictures Modal */}
      <Dialog open={is404Open} onOpenChange={setIs404Open}>
        <DialogContent className="max-w-2xl bg-white border border-red-200 shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-red-600 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              404 - Pictures Not Found
            </DialogTitle>
            <DialogDescription className="text-slate-600 mt-2">
              The requested gallery could not be loaded
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <ImageOff className="w-24 h-24 text-slate-300" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">
                  Error: Missing Photo Archive
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Despite <strong>9+ months</strong> of dating status, the photo gallery for "subject + primary" appears to be... 
                  <em>completely empty</em>.
                </p>
                <p className="text-sm text-slate-500 italic">
                  This is either a critical system bug or a severe oversight in dating documentation protocols.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mx-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-red-800">Recommendation:</p>
                    <p className="text-sm text-red-700">
                      Immediate remediation suggested. Consider scheduling a photo session to populate this embarrassingly empty database.
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => setIs404Open(false)}
                className="bg-red-600 hover:bg-red-700 text-white"
                data-testid="button-close-404"
              >
                Close (And Pretend This Never Happened)
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Promotion Rewards Modal */}
      <Dialog open={isPromotionOpen} onOpenChange={setIsPromotionOpen}>
        <DialogContent className="max-w-3xl bg-white border border-slate-200 shadow-lg">
          <DialogHeader className="text-center space-y-2">
            {/* Confetti decoration in modal */}
            <div className="relative">
              <div className="absolute -top-4 left-0 w-full flex justify-center space-x-2 opacity-60">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rotate-45 animate-bounce"
                    style={{
                      backgroundColor: colors[i % colors.length],
                      animationDelay: `${i * 0.1}s`,
                      borderRadius: Math.random() > 0.5 ? '50%' : '0',
                    }}
                  />
                ))}
              </div>
            </div>
            
            <DialogTitle className="text-2xl font-bold text-slate-900 mt-4 text-center">
              Congratulations!
            </DialogTitle>
            <div className="text-lg text-slate-700 text-center">
              You have been promoted 🎉
            </div>
            <DialogDescription className="text-sm text-slate-600 text-center">
              Choose your reward:
            </DialogDescription>
          </DialogHeader>

          <div className="pt-1">
            <div className="grid grid-cols-2 gap-4">
              {/* +20% Boyfriend Reward */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300 rounded-xl p-4 text-center space-y-2 h-56 flex flex-col justify-between" data-testid="reward-boyfriend">
                <div>
                  <div className="text-3xl mb-1">🏆</div>
                  <h3 className="text-lg font-bold text-blue-900">
                    +20% Boyfriend Reward
                  </h3>
                  <p className="text-xs text-blue-800 leading-tight">
                    Brings the scale to a 40% relationship KPI uplift. Now with guaranteed jacket-lending obligations and permanent clock-setting benefits. Non-revocable once activated.
                  </p>
                </div>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1 text-sm mt-auto"
                  data-testid="button-choose-boyfriend"
                  onClick={() => {
                    setShowConfettiExplosion(true);
                    setIsPromotionOpen(false);
                    setShowBoyfriendReward(true);
                    
                    // Start progress animation (1% per half second from 20% to 40%)
                    const interval = setInterval(() => {
                      setRelationshipProgress(prev => {
                        if (prev >= 40) {
                          clearInterval(interval);
                          setProgressInterval(null);
                          return 40;
                        }
                        return prev + 1;
                      });
                    }, 500);
                    setProgressInterval(interval);
                    
                    // Stop confetti after 4 seconds
                    setTimeout(() => {
                      setShowConfettiExplosion(false);
                    }, 4000);
                  }}
                >
                  Choose This
                </Button>
              </div>

              {/* Companion Expansion Pack */}
              <div className="bg-gradient-to-br from-green-100 to-green-200 border border-green-300 rounded-xl p-4 text-center space-y-2 h-56 flex flex-col justify-between" data-testid="reward-companion">
                <div>
                  <div className="text-3xl mb-1">🐶</div>
                  <h3 className="text-lg font-bold text-green-900">
                    Companion Expansion Pack
                  </h3>
                  <p className="text-xs text-green-800 italic mb-1">(curated by Lola)</p>
                  <p className="text-xs text-green-800 leading-tight">
                    Unlocks additional petting rights, lap-sit privileges, and one (1) complimentary attempt per week at "Give Paw" training. Outcomes uncertain; morale impact consistently high.
                  </p>
                </div>
                <Button 
                  className={companionClickCount === 0 ? "bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-1 text-sm mt-auto" : "bg-gray-300 text-gray-600 font-semibold px-4 py-1 text-sm mt-auto cursor-not-allowed"}
                  data-testid="button-choose-companion"
                  onClick={() => {
                    if (companionClickCount === 0) {
                      setShowLolaApproval(true);
                      setIsPromotionOpen(false);
                      setTimeout(() => {
                        setShowLolaApproval(false);
                        setIsPromotionOpen(true);
                        setCompanionClickCount(1);
                      }, 3000);
                    }
                  }}
                >
                  {companionClickCount === 0 ? "Choose This" : "Lola approves.. but are you very certain?"}
                </Button>
              </div>

              {/* Signal Communication Upgrade */}
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 border border-orange-300 rounded-xl p-4 text-center space-y-2 h-56 flex flex-col justify-between" data-testid="reward-signal">
                <div>
                  <div className="text-3xl mb-1">📱</div>
                  <h3 className="text-lg font-bold text-orange-900">
                    Signal Communication Upgrade
                  </h3>
                  <p className="text-xs text-orange-800 leading-tight">
                    Delivers a strict "no-drama-after-12pm" SLA, accelerated emoji middle-finger response times, and one (1) mediocre joke forgiveness credit per week. Late-night Signal engagement remains best-in-class.
                  </p>
                </div>
                <Button 
                  className={signalClickCount === 0 ? "bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-1 text-sm mt-auto" : "bg-gray-300 text-gray-600 font-semibold px-4 py-1 text-sm mt-auto cursor-not-allowed"}
                  data-testid="button-choose-signal"
                  onClick={() => {
                    if (signalClickCount === 0) {
                      setSignalClickCount(1);
                    } else if (signalClickCount === 1) {
                      setSignalClickCount(2);
                    } else {
                      setShowWrongChoiceError(true);
                    }
                  }}
                >
                  {signalClickCount === 0 ? "Choose This" : 
                   signalClickCount === 1 ? "ARE YOU CERTAIN??" : 
                   "ARE YOU REALLY REALLY CERTAIN???"}
                </Button>
              </div>

              {/* Rope Mastery Enhancement Pack */}
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-300 rounded-xl p-4 text-center space-y-2 h-56 flex flex-col justify-between" data-testid="reward-rope">
                <div>
                  <div className="text-3xl mb-1">🪢</div>
                  <h3 className="text-lg font-bold text-purple-900">
                    Rope Mastery Enhancement Pack
                  </h3>
                  <p className="text-xs text-purple-800 leading-tight">
                    Expands advanced competencies in tying things together. Applicable to product roadmaps, stakeholder calibration, and extracurricular scenarios. Committee flagged scope as unconventional; manager intervention approved.
                  </p>
                </div>
                <Button 
                  className={ropeClickCount === 0 ? "bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-1 text-sm mt-auto" : "bg-gray-300 text-gray-600 font-semibold px-4 py-1 text-sm mt-auto cursor-not-allowed"}
                  data-testid="button-choose-rope"
                  onClick={() => {
                    if (ropeClickCount === 0) {
                      setRopeClickCount(1);
                    } else if (ropeClickCount === 1) {
                      setRopeClickCount(2);
                    } else {
                      setShowWrongChoiceError(true);
                    }
                  }}
                >
                  {ropeClickCount === 0 ? "Choose This" : 
                   ropeClickCount === 1 ? "ARE YOU REALLY REALLY CERTAIN??" : 
                   "ARE YOU REALLY REALLY CERTAIN???"}
                </Button>
              </div>
            </div>


          </div>
        </DialogContent>
      </Dialog>

      {/* Wrong Choice Error Modal */}
      <Dialog open={showWrongChoiceError} onOpenChange={setShowWrongChoiceError}>
        <DialogContent className="max-w-md bg-red-50 border-2 border-red-300 shadow-xl">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-red-800 flex items-center justify-center gap-2">
              🚨 ERROR: Invalid Selection
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-4 text-center">
            <p className="text-red-700 text-lg mb-4">
              Did you mean: <br/>
              <strong className="text-red-900 text-xl">"+20% Boyfriend Reward"</strong>?
            </p>
            <p className="text-red-600 text-sm italic">
              Please try again. 😏
            </p>
            
            <Button 
              onClick={() => setShowWrongChoiceError(false)}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 mt-4"
              data-testid="button-error-ok"
            >
              Got It! 😅
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lola Approval Modal */}
      <Dialog open={showLolaApproval} onOpenChange={() => {}}>
        <DialogContent className="max-w-2xl bg-white border border-slate-200 shadow-lg">
          <div className="text-center py-8">
            <div className="mb-6">
              <img 
                src={lolaImage} 
                alt="Lola the dog" 
                className="w-64 h-64 object-cover rounded-full mx-auto border-4 border-green-300 shadow-lg"
                data-testid="img-lola"
              />
            </div>
            <h2 className="text-4xl font-bold text-green-800 mb-4 animate-bounce">
              🐶 LOLA APPROVES! 🐶
            </h2>
          </div>
        </DialogContent>
      </Dialog>

      {/* Boyfriend Reward Success Modal */}
      <Dialog open={showBoyfriendReward} onOpenChange={(open) => {
        if (!open) {
          // Reset everything when modal is closed
          if (progressInterval) {
            clearInterval(progressInterval);
            setProgressInterval(null);
          }
          setRelationshipProgress(20);
          setShowSuccessMessage(false);
        }
        setShowBoyfriendReward(open);
      }}>
        <DialogContent className="max-w-lg bg-gradient-to-br from-pink-50 to-blue-50 border-2 border-pink-300 shadow-xl">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-pink-800 text-center">
              Relationship Upgrade Complete!
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-6 text-center space-y-6">
            <div className="text-6xl">🏆</div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Relationship Progress</h3>
              
              {/* Progress Bar Container */}
              <div className="w-full bg-gray-200 rounded-full h-8 mb-2 border border-gray-300">
                <div 
                  className="bg-gradient-to-r from-pink-500 to-blue-500 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-2000 ease-out"
                  style={{ width: `${relationshipProgress}%` }}
                  data-testid="progress-relationship"
                >
                  {relationshipProgress}%
                </div>
              </div>
              
              <p className="text-sm text-slate-600 italic">
                {relationshipProgress < 40 ? "Loading enhanced boyfriend protocols..." : "Upgrade successful! New perks unlocked!"}
              </p>
            </div>
            
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">✨ New Perks Unlocked:</h4>
              <p className="text-sm text-blue-800 italic">[REDACTED]</p>
              <p className="text-xs text-blue-700 italic mt-2">
                For additional perks, contact stvi
              </p>
            </div>
            
            <Button 
              onClick={() => {
                if (progressInterval) {
                  clearInterval(progressInterval);
                  setProgressInterval(null);
                }
                setShowSuccessMessage(true);
              }}
              className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 text-white font-bold px-8 py-3 text-lg"
              data-testid="button-boyfriend-complete"
            >
              I accept this mission
            </Button>
            
            {showSuccessMessage && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-center font-medium">
                  Yay, 40%! En ik ben echt supertrots op wat je allemaal hebt gedaan :)
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Massive Confetti Explosion for Boyfriend Reward */}
      <ConfettiExplosion active={showConfettiExplosion} />
    </div>
  );
}
