import { Component, OnInit, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { Route } from '@angular/router';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import * as ng2Charts from 'ng2-charts';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { Dashboard } from 'src/app/interface/response/dashboard';
import { ApiService } from 'src/app/services/api.service';
import { ErrorService } from 'src/app/services/error/error.service';
import { Chart, registerables } from 'node_modules/chart.js';
import { Graph } from 'src/app/interface/response/graph';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data!: Dashboard | void;
  graphData!: Graph[] | void;
  months: number[] = [];
  count: number[] = [];

  constructor(private api: ApiService, private errorService: ErrorService) {}

  async ngOnInit(): Promise<void> {
    await this.getAllData();
    await this.getGraphData();
    this.renderChart();
  }

  async getAllData() {
    this.data = await firstValueFrom<Dashboard>(this.api.get('/graph')).catch(
      (err) => {
        this.errorService.showErro(err);
      }
    );
  }

  renderChart() {
    new Chart('chart', {
      type: 'bar',
      data: {
        labels: this.months,
        datasets: [
          {
            label: '# of Votes',
            data: this.count,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    new Chart('bar', {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  async getGraphData() {
    this.graphData = await firstValueFrom<Graph[]>(this.api.get('/bar-graph'));

    this.graphData.map((item) => {
      this.months.push(item.Month);
      this.count.push(item.Count);
    });
  }
}
