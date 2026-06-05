export const COURTS = [
    "5v5-1",
    "5v5-2",
    "5v5-3",
    "7v7-A",
    "7v7-B",
];

export const CONFLICT_GRAPH = {
    "5v5-1": ["7v7-A"],
    "5v5-2": [
        "7v7-A",
        "7v7-B",
    ],
    "5v5-3": ["7v7-B"],
    "7v7-A": [
        "5v5-1",
        "5v5-2",
    ],
    "7v7-B": [
        "5v5-2",
        "5v5-3",
    ],
};