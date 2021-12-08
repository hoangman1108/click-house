ATTACH TABLE _ UUID '27f9411d-6bc8-436c-a7f9-411d6bc8a36c'
(
    `date` Date,
    `time` DateTime,
    `mark` String,
    `ips` Array(UInt32),
    `queries.act` Array(String),
    `queries.id` Array(UInt32)
)
ENGINE = MergeTree(date, (mark, time), 8192)
