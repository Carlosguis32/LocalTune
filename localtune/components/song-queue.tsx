import React from 'react';
import { usePlayerContext } from '@/context/player-context';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Music } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SongQueueProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SongQueue({ isOpen, onClose }: SongQueueProps) {
  const {
    audioQueue,
    currentQueuePosition,
    currentlyPlayingAudio,
    setCurrentQueuePosition,
  } = usePlayerContext();

  // Debug log
  React.useEffect(() => {
    console.log('SongQueue - audioQueue:', audioQueue, 'length:', audioQueue.length);
  }, [audioQueue]);



  const handleSongClick = (index: number) => {
    setCurrentQueuePosition(index);
  };

  const removeFromQueue = (index: number) => {
    // For now, just skip to next if removing current song
    if (index === currentQueuePosition) {
      // Could implement queue management here
      console.log('Remove current song from queue');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-background border-l border-border z-50 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Queue</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {audioQueue.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
              <Music className="w-8 h-8 mb-2" />
              <p className="text-sm">No songs in queue</p>
            </div>
          ) : (
            <div className="space-y-1">
              {audioQueue.map((song, index) => (
                <div
                  key={`${song}-${index}`}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-accent transition-colors",
                    index === currentQueuePosition && "bg-accent border-l-4 border-primary"
                  )}
                  onClick={() => handleSongClick(index)}
                >
                  <div className="flex-1 min-w-0">
                    <p className={cn(
                      "text-sm font-medium truncate",
                      index === currentQueuePosition && "text-primary"
                    )}>
                      {song.replace(/\.[^/.]+$/, "")} {/* Remove file extension */}
                    </p>
                    {index === currentQueuePosition && currentlyPlayingAudio && (
                      <p className="text-xs text-muted-foreground">Now playing</p>
                    )}
                  </div>

                  {index !== currentQueuePosition && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromQueue(index);
                      }}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}