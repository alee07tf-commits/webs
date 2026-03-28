
import os

file_path = 'c:/Users/Alejandro/.gemini/antigravity/scratch/dental-funnel/nueva web zappyapps/index.html'
new_content_path = 'c:/Users/Alejandro/.gemini/antigravity/scratch/dental-funnel/nueva web zappyapps/new_pricing_content.html'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open(new_content_path, 'r', encoding='utf-8') as f:
    new_lines = f.readlines()

# Find the start and end indices
start_idx = -1
end_section_idx = -1

for i, line in enumerate(lines):
    if '<!-- Pricing Container: Existing Web -->' in line:
        start_idx = i
    if '</section>' in line and start_idx != -1 and i > start_idx:
        # We need the </section> that closes the pricing section.
        # Check if this </section> is followed closely by FAQ
        # Or just take the first one after start_idx?
        # The pricing section contains the pricing container. So yes, likely the first one.
        end_section_idx = i
        break

if start_idx == -1 or end_section_idx == -1:
    print(f"Error: Could not find markers. Start: {start_idx}, End Section: {end_section_idx}")
    exit(1)

# Analyze the lines before </section> to confirm we are cutting correctly
# We expect:
# END_SECTION:     </section>
# END_SECTION-1:         </div>  (Closes max-w-7xl)
# END_SECTION-2:                 (Empty or Whitespace)
# END_SECTION-3:         </div>  (Closes pricing-existing-web)

# We want to replace everything from START_IDX up to (but not including) END_SECTION-2.
# So we remove lines[start_idx : end_section_idx-2] ?
# Wait.
# If we remove lines[start:end-2], we keep end-2 (whitespace) and end-1 (</div>).
# Yes, that effectively removes the old pricing-existing-web block.
# And we insert new_lines in its place.

# Let's verify the "safety check"
print(f"Start Index: {start_idx}")
print(f"End Section Index: {end_section_idx}")
print(f"Line at End-1: {lines[end_section_idx-1].strip()}") # Should be </div>
print(f"Line at End-3: {lines[end_section_idx-3].strip()}") # Should be </div>

# Perform replacement
# lines[start_idx : end_section_idx-2] -> This range covers existing web block + its footer + closing div.
# Actually, wait.
# lines[end_section_idx-3] IS the closing div of pricing-existing-web.
# So we want to remove up to end_section_idx-3 (inclusive).
# Python slice [start : stop] excludes stop.
# So we want stop = end_section_idx-2.
# This removes start ... end-3.
# Keeps end-2 (whitespace) and end-1 (</div>).

# Correct.

final_lines = lines[:start_idx] + new_lines + lines[end_section_idx-2:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

print("Successfully updated index.html")
