import { Component } from '@angular/core';

@Component({
  selector: 'task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  number: number = 1;
  selectedDepartment: string | null = null;
  previousDepartment: string | null = null;
  nextDepartment: string | null = null;
  list: [number, any, any,boolean][] = [];
 
  selectedGuide: string | null = null;
  previousGuide: string | null = null;
  nextGuide: string | null = null;
  affil: string = 'Enter Affiliation';

  guides = [
    { name: 'Prof. Jagadeesh Bayry', department: 'Biological Sciences and Engineering' },
    { name: 'Dr. Abdul Rasheed P', department: 'Biological Sciences and Engineering' },
    { name: 'Debarati Chatterjee', department: 'Chemistry' },
    { name: 'Dinesh Jagadeesan', department: 'Chemistry' },
    { name: 'Ankesh Kumar', department: 'Civil Engineering' },
    { name: 'Arun C O', department: 'Civil Engineering' },
    { name: 'Albert Sunny', department: 'Computer Science & Engineering' },
    { name: 'Sandeep Chandran', department: 'Computer Science & Engineering' },
    { name: 'Koninika Pal', department: 'Data Science' },
    { name: 'Mrinal Kanti Das', department: 'Data Science' },
    { name: 'Anirudh Guha', department: 'Electrical Engineering' },
    { name: 'Arun Rahul S', department: 'Electrical Engineering' }
  ];

  selectedGuides: any[] = [];
  externalCheckboxChecked: boolean = false;
  selectedOption: string = '';
  useTextboxes: boolean = true;

  increment() {
    this.number++;
    console.log('Increment - New Page Number:', this.number);
    console.log('Increment - Pushed Guide:', this.selectedGuide);
    console.log(this.list);
    this.selectedGuide = null;
    this.selectedDepartment = null;
    this.externalCheckboxChecked = false;
  
    const index = this.number - 1;
    if (this.list[index]) {
      if (this.number === this.list[index][0]) {
        this.selectedGuide = this.list[index][1];
        this.selectedDepartment = this.list[index][2];
        this.externalCheckboxChecked = this.list[index][3]; // Update externalCheckboxChecked
      }
    }

  

  
  }

  decrement() {
    this.number--;
    console.log('Increment - New Page Number:', this.number);
    console.log('Increment - Pushed Guide:', this.selectedGuide);
    console.log('pop', this.selectedGuide);
    console.log(this.list);

    const index = this.number - 1;
    if (this.list[index]) {
      if (this.number === this.list[index][0]) {
        this.selectedGuide = this.list[index][1];
        this.selectedDepartment = this.list[index][2];
        this.externalCheckboxChecked = this.list[index][3]; // Update externalCheckboxChecked
      }
    }
    

    this.updateFilteredGuides();
  }

  updateFilteredGuides(): any[] {
    if (this.selectedDepartment == null) {
      return this.guides;
    }
    if (this.externalCheckboxChecked) {
      return this.guides;
    }
    return this.guides.filter(
      (guide) => guide.department === this.selectedDepartment
    );
  }
  onGuideSelect(guide: any) {
    // Check if there's already a guide selected for the current page
    const index = this.list.findIndex((item) => item[0] === this.number);
    if (index !== -1) {
      // If a guide is already selected for the current page, replace it
      this.list[index] = [this.number, guide, this.selectedDepartment, this.externalCheckboxChecked];
    } else {
      // If no guide is selected for the current page, add a new entry
      this.list.push([this.number, guide, this.selectedDepartment, this.externalCheckboxChecked]);
    }
  
    this.selectedGuide = guide;
  
  }
  get filteredGuides(): any[] {
    const filteredGuides = this.updateFilteredGuides();
  
    // Filter out guides that have already been selected
    const guidesNotSelected = filteredGuides.filter((guide) => {
      const index = this.list.findIndex((item) => item[1].name === guide.name);
      return index === -1 || this.list[index][0] === this.number;
    });
  
    return guidesNotSelected;
  }
  update() {
    if (this.externalCheckboxChecked)
      this.useTextboxes = false;
    else
      this.useTextboxes = true;
  }

}
