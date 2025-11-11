# Assignment 2 Grading Report
## Student: Jeremy

**Final Score: 97/100 (A+)**

---

## Summary

Great job, Jeremy! Your submission earned 97/100 points (A+), showcasing a strong understanding of React concepts. You particularly excelled in Component Structure, State Management, UI & Styling, and Task Filtering, showing strong technical execution. Your code demonstrates clean component organization, proper state management, and thoughtful user interface design. This quality of work will serve you well in upcoming projects!

---

## Category Breakdown

### Component Structure: 20/20 (100%)

✅ **CS-01**: At least 4 separate component files created
   - Score: 5/5
   - Found 4 separate component files: TaskItem.jsx, TaskCounter.jsx, TaskList.jsx, TaskForm.jsx

✅ **CS-02**: Proper component hierarchy (App → TaskList → TaskItem)
   - Score: 5/5
   - Excellent component hierarchy! App properly contains TaskList and TaskForm, and TaskList contains TaskItem.

✅ **CS-03**: Clean separation of concerns between components
   - Score: 5/5
   - Excellent separation of concerns! Each component has a clear, single responsibility.

✅ **CS-04**: Props passed correctly between components
   - Score: 5/5
   - Props passed correctly. TaskForm receives add_task callback prop. Manual review confirmed snake_case naming is valid and functional ()


### Task Management: 22/25 (88%)

✅ **TM-01**: Add new task functionality works
   - Score: 7/7
   - Add task functionality properly creates task objects with id, text, and completed fields using immutable state updates. Manual review confirmed snake_case naming and.concat() method work correctly ()

✅ **TM-02**: Mark task as complete/incomplete works
   - Score: 6/6
   - Toggle functionality properly flips completed status using immutable updates.

✅ **TM-03**: Delete task functionality works
   - Score: 6/6
   - Delete functionality properly removes tasks using immutable state updates with.filter() method. Manual review confirmed snake_case naming and functionality work correctly ()

✅ **TM-04**: Task counter displays in header with 'total / completed' format
   - Score: 3/3
   - Task counter displays in header with 'total / completed' format is properly implemented.

❌ **TM-05**: Empty state message displays when no tasks
   - Score: 0/3
   - Needs improvement: Conditional rendering for empty state, Empty message exists.
   - Deductions:
      - An empty state message should display when there are no tasks in the list. (3 points deducted)
      - The empty state message was not found in the application. (2 points deducted)


### State Management: 25/25 (100%)

✅ **SM-01**: useState hook implemented correctly
   - Score: 8/8
   - UseState hook implemented correctly is properly implemented.

✅ **SM-02**: State updates immutably (no direct mutations)
   - Score: 7/7
   - State updates immutably using.concat(),.filter(), and.map() array methods. These are functionally equivalent to spread operator patterns. Manual review confirmed all state updates are immutable ()

✅ **SM-03**: Event handlers properly bound and working
   - Score: 5/5
   - Event handlers properly bound and working is properly implemented.

✅ **SM-04**: Form is controlled component with proper state
   - Score: 5/5
   - Form is controlled component with proper state is properly implemented.


### UI & Styling: 15/15 (100%)

✅ **UI-01**: Reuses Assignment 1 CSS effectively
   - Score: 5/5
   - Reuses Assignment 1 CSS effectively is properly implemented.

✅ **UI-02**: Responsive design maintained from Assignment 1
   - Score: 3/3
   - Responsive design maintained from Assignment 1 is properly implemented.

✅ **UI-03**: Visual feedback for user interactions
   - Score: 3/3
   - Visual feedback for user interactions is properly implemented.

✅ **UI-04**: Completed tasks visually distinct
   - Score: 2/2
   - Completed tasks visually distinct is properly implemented.

✅ **UI-05**: Clean, professional appearance
   - Score: 2/2
   - Clean, professional appearance is properly implemented.


### Task Filtering: 15/15 (100%)

✅ **TF-01**: Filter buttons render and respond to clicks
   - Score: 5/5
   - Filter buttons render and respond to clicks is properly implemented.

✅ **TF-02**: Tasks filter correctly based on completion status
   - Score: 5/5
   - Tasks filter correctly based on completion status is properly implemented.

✅ **TF-03**: Active filter button is visually highlighted
   - Score: 3/3
   - Active filter button is visually highlighted is properly implemented.

✅ **TF-04**: Filter buttons placed horizontally with separators
   - Score: 2/2
   - Filter buttons placed horizontally with separators is properly implemented.


---

## Areas for Growth

- **TM-05**: Empty state message displays when no tasks

Review the specific feedback above for each item to understand how to improve these areas.
