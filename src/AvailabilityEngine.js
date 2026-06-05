import { COURTS, CONFLICT_GRAPH } from "./data/data";

export function calculateAvailability(bookings) {
    const booked = new Set(bookings);
    const blocked = new Set();

    for (const court of booked) {
        const conflicts = CONFLICT_GRAPH[court] || [];
        conflicts.forEach((conflictCourt) => {
            if (!booked.has(conflictCourt)) {
                blocked.add(conflictCourt);
            }
        });
    }
    const available = COURTS.filter(
        (court) =>
            !booked.has(court) &&
            !blocked.has(court)
    );

    return {
        booked: [...booked],
        blocked: [...blocked],
        available,
    };
}