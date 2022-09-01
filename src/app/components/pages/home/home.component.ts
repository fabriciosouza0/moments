import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  baseApiUrl = environment.baseApiUrl;
  allMoments!: Moment[];
  moments!: Moment[];
  faSearch = faSearch;

  constructor(private momentService: MomentService) { }

  ngOnInit() {
    this.allMoments = [];
    this.moments = [];
    this.momentService.getMoments().subscribe((item) => {
      const data = item.data;

      data.map((moment) => {
        moment.created_at = new Date(moment.created_at!).toLocaleDateString(
          'pt-BR'
        );

        this.allMoments.push(moment);
        this.moments.push(moment);
      });
    });
  }

  search(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.toLowerCase();

    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value);
    });
  }
}
