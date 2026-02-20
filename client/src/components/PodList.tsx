import { useGatewayStore } from '../stores/gateway';
import { cn } from '../lib/utils'; // Assuming basic utils exist or inline classnames

export function PodList() {
    const { pods, currentPodId, selectPod } = useGatewayStore();

    return (
        <div className="w-[72px] bg-void flex flex-col items-center py-4 gap-3 border-r border-cosmic select-none">
            {/* Home / DM Button Placeholder */}
            {/* Home / DM Button */}
            <div
                onClick={() => selectPod(null)}
                className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 relative group",
                    currentPodId === null
                        ? "bg-nebula text-void rounded-2xl"
                        : "bg-cosmic text-starlight hover:bg-nebula hover:text-void hover:rounded-2xl"
                )}
            >
                <span className="text-xl">🌌</span>
            </div>

            <div className="w-8 h-[2px] bg-cosmic rounded-full" />

            {/* Pods */}
            {pods.map((pod) => (
                <div
                    key={pod.id}
                    onClick={() => selectPod(pod.id)}
                    className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 relative group",
                        currentPodId === pod.id
                            ? "bg-nebula text-void rounded-2xl"
                            : "bg-cosmic text-dust hover:bg-starlight hover:text-void hover:rounded-2xl"
                    )}
                >
                    {/* Active Indicator */}
                    {currentPodId === pod.id && (
                        <div className="absolute -left-4 w-1 h-8 bg-starlight rounded-r-full" />
                    )}

                    <span className="font-bold text-sm">
                        {pod.name.substring(0, 2).toUpperCase()}
                    </span>
                </div>
            ))}
        </div>
    );
}
