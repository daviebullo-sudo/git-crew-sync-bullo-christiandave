1. What did the rejected push error message tell you, and why did it happen?

The message said the remote contained work I didn't have locally, and that the update was rejected as non-fast-forward (fetch first). It happened because the other clone had already pushed a commit to the shared branch,   so my local tip was no longer an ancestor of the remote tip. Accepting my push would have discarded their commit. Git refuses that by default to prevent data loss — the rejection is a safety guard, not a broken state.  

2. What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?

Merge (Task 3) - fetched the remote branch and merged it in. Git created a new merge commit with two parents. Both sides commits kept their original hashes, and history kept its diamond shape. One conflict, resolved once.

Rebase (Task 4) - replayed my local commit on top of the remote tip. No merge commit. My commit got a new hash because its parent changed, and history became linear. The conflict happened mid-replay and I resolved it before git rebase --continue.

3. What one habit would have avoided both rejected pushes in this lab?

Syncing with the remote before pushing git pull --rebase right before every git push. The rejection was really about pushing a stale branch; push was just the moment Git noticed. Syncing first would have turned both pushes into fast-forwards.

4. Which approach — merge or rebase — would you default to on a shared team branch, and why?

Merge on shared branches; rebase only on my own un-pushed commits. Merge never rewrites existing commits, so it's safe when others have built on the branch — which is the whole point of a shared branch. Rebase rewrites hashes, so it's fine for tidying my own local commits before pushing, but disruptive if others already have them. Rule of thumb: rebase locally, merge remotely.
